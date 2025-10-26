import { useEffect, useState, useCallback } from 'react';
import { usePostHog } from 'posthog-js/react';
import { useLocation } from 'react-router-dom';

// Track page views in session storage to persist across page reloads
const getSessionPageViews = () => {
  if (typeof window === 'undefined') return 0;
  return parseInt(sessionStorage.getItem('page_view_count') || '0', 10);
};

const incrementSessionPageViews = () => {
  if (typeof window === 'undefined') return 0;
  const currentCount = getSessionPageViews();
  const newCount = currentCount + 1;
  sessionStorage.setItem('page_view_count', newCount.toString());
  return newCount;
};

const Banner = () => {
  const posthog = usePostHog();
  const [showBanner, setShowBanner] = useState(false);
  const [pageViewCount, setPageViewCount] = useState(0);
  const [isInTestGroup, setIsInTestGroup] = useState(false);
  const location = useLocation();

  // Function to safely get feature flag with retry
  const getFeatureFlag = useCallback(async (flagName, retries = 3, delay = 500) => {
    if (!posthog) {
      console.error('PostHog not initialized');
      return null;
    }

    try {
      // Force reload flags if needed
      if (retries < 3) {
        await new Promise(resolve => setTimeout(resolve, delay));
      }
      
      const value = await posthog.isFeatureEnabled(flagName);
      if (value !== undefined) return value;
      
      if (retries > 0) {
        console.log(`[Banner] Retrying to get flag ${flagName}, attempts left: ${retries}`);
        return getFeatureFlag(flagName, retries - 1, delay * 1.5);
      }
      
      return null;
    } catch (error) {
      console.error(`[Banner] Error getting flag ${flagName}:`, error);
      return null;
    }
  }, [posthog]);

  // Function to check and update banner visibility
  const checkBannerVisibility = useCallback(async (views) => {
    if (!posthog) {
      console.log('[Banner] PostHog not initialized yet');
      return;
    }

    try {
      console.log('[Banner] Checking visibility. Page views:', views);
      
      // Get both flags in parallel
      const [isBannerEnabled, isInTestGroup] = await Promise.all([
        getFeatureFlag('show_booking_banner'),
        getFeatureFlag('booking_banner_ab_test')
      ]);
      
      console.log('[Banner] Flags:', { isBannerEnabled, isInTestGroup });
      
      // If we couldn't get the flags, don't show the banner
      if (isBannerEnabled === null || isInTestGroup === null) {
        console.log('[Banner] Could not determine feature flags, not showing banner');
        return;
      }
      
      setIsInTestGroup(!!isInTestGroup);
      
      if (views >= 3 && isBannerEnabled && isInTestGroup) {
        console.log('[Banner] Showing banner - Test group with 3+ page views');
        setShowBanner(true);
        
        // Capture the banner shown event
        posthog.capture('banner_shown', {
          banner_type: 'check_availability',
          page_view_count: views,
          path: window.location.pathname,
          test_group: 'variant_50pct',
          feature_flag: 'booking_banner_ab_test'
        });
      } else {
        console.log('Not showing banner - ', {
          views,
          isBannerEnabled,
          isInTestGroup
        });
        setShowBanner(false);
      }
    } catch (error) {
      console.error('Error in checkBannerVisibility:', error);
    }
  }, [posthog]);

  // Update page view count and check banner visibility on route change
  useEffect(() => {
    const newCount = incrementSessionPageViews();
    setPageViewCount(newCount);
    
    // Small delay to ensure PostHog is fully initialized
    const timer = setTimeout(() => {
      console.log('[Banner] Checking banner after route change to:', location.pathname);
      checkBannerVisibility(newCount);
    }, 300);
    
    return () => clearTimeout(timer);
  }, [location.pathname, checkBannerVisibility]);

  // Initial check when component mounts
  useEffect(() => {
    // Initial check after a short delay
    const initialTimer = setTimeout(() => {
      console.log('[Banner] Initial banner check');
      checkBannerVisibility(pageViewCount);
    }, 500);
    
    // Set up an interval to check for updates (as a fallback)
    const interval = setInterval(() => {
      console.log('[Banner] Periodic banner check');
      const currentViews = getSessionPageViews();
      checkBannerVisibility(currentViews);
    }, 5000); // Check every 5 seconds as a fallback
    
    return () => {
      clearTimeout(initialTimer);
      clearInterval(interval);
    };
  }, [checkBannerVisibility, pageViewCount]);

  const handleClose = () => {
    setShowBanner(false);
    try {
      posthog.capture('banner_closed', { banner_type: 'check_availability' });
    } catch (error) {
      console.error('Failed to capture banner_closed event:', error);
    }
  };

  const handleClick = () => {
    try {
      posthog.capture('banner_clicked', { banner_type: 'check_availability' });
    } catch (error) {
      console.error('Failed to capture banner_clicked event:', error);
    }
    window.location.href = '/booking';
  };

  if (!showBanner) return null

  return (
    <div style={{
      position: 'fixed',
      bottom: 0,
      left: 0,
      right: 0,
      background: '#4F46E5',
      color: 'white',
      padding: '16px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      zIndex: 1000,
      boxShadow: '0 -2px 10px rgba(0,0,0,0.1)'
    }}>
      <span>Check availability for your dates now! 🏡</span>
      <div>
        <button 
          onClick={handleClick}
          style={{
            background: 'white',
            color: '#4F46E5',
            border: 'none',
            padding: '8px 16px',
            borderRadius: '4px',
            marginRight: '8px',
            cursor: 'pointer',
            fontWeight: 500
          }}
        >
          Check Availability
        </button>
        <button 
          onClick={handleClose}
          style={{
            background: 'transparent',
            color: 'white',
            border: '1px solid white',
            padding: '8px 16px',
            borderRadius: '4px',
            cursor: 'pointer'
          }}
        >
          Close
        </button>
      </div>
    </div>
  )
}

export default Banner