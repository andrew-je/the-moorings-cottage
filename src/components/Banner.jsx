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

  // Function to check and update banner visibility
  const checkBannerVisibility = useCallback((views) => {
    if (!posthog) return;

    try {
      console.log('Checking banner visibility. Page views:', views);
      
      // Check if banner is enabled via feature flag
      const isBannerEnabled = posthog.isFeatureEnabled('show_booking_banner');
      
      // Check if user is in the test group (50% of users)
      const isInTestGroup = posthog.isFeatureEnabled('booking_banner_ab_test');
      setIsInTestGroup(isInTestGroup);
      
      if (views >= 3 && isBannerEnabled && isInTestGroup) {
        console.log('Showing banner - Test group with 3+ page views');
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

  // Track page views and check feature flags
  useEffect(() => {
    if (typeof window === 'undefined' || !posthog) return;
    
    // Get current view count and increment
    const newViewCount = incrementSessionPageViews();
    setPageViewCount(newViewCount);
    
    // Load feature flags
    const loadFeatureFlags = async () => {
      try {
        // Ensure flags are loaded
        await posthog.reloadFeatureFlags();
        // Check banner visibility with the latest flags
        checkBannerVisibility(newViewCount);
      } catch (error) {
        console.error('Error loading feature flags:', error);
      }
    };
    
    loadFeatureFlags();
    
    // Set up an interval to check for updates
    const interval = setInterval(() => {
      const currentViews = getSessionPageViews();
      checkBannerVisibility(currentViews);
    }, 3000);
    
    return () => clearInterval(interval);
  }, [posthog, checkBannerVisibility, location.pathname]);

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