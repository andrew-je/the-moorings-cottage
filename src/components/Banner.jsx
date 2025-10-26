// src/components/Banner.jsx
import { useEffect, useState, useCallback } from 'react';
import { usePostHog } from 'posthog-js/react';
import { useLocation } from 'react-router-dom';

const getSessionPageViews = () => {
  if (typeof window === 'undefined') return 0;
  return parseInt(sessionStorage.getItem('page_view_count') || '0', 10);
};

const Banner = () => {
  const posthog = usePostHog();
  const [showBanner, setShowBanner] = useState(false);
  const [bannerVariant, setBannerVariant] = useState('default');
  const location = useLocation();

  // Enhanced feature flag getter with retry logic
  const getFeatureFlag = useCallback(async (flagName) => {
    if (!posthog) return null;
    
    // Try to get the flag value
    let value = posthog.isFeatureEnabled(flagName);
    if (value !== undefined) return value;
    
    // If flag is undefined, try to reload flags
    await new Promise(resolve => posthog.reloadFeatureFlags(resolve));
    value = posthog.isFeatureEnabled(flagName);
    
    // If still undefined, log a warning
    if (value === undefined) {
      console.warn(`[Banner] Flag ${flagName} is still undefined after reload`);
    }
    
    return value;
  }, [posthog]);

  // Check if banner should be shown with feature flags
  const checkBannerVisibility = useCallback(async () => {
    if (!posthog) return;

    try {
      const views = getSessionPageViews();
      console.log('[Banner] Checking visibility. Page views:', views);
      
      // Get feature flags for A/B testing
      const [showBannerFlag, abTestFlag, bannerStyleFlag] = await Promise.all([
        getFeatureFlag('show_booking_banner'),
        getFeatureFlag('booking_banner_ab_test'),
        getFeatureFlag('banner_style_variant')
      ]);
      
      console.log('[Banner] Feature flags:', { 
        showBannerFlag, 
        abTestFlag, 
        bannerStyleFlag 
      });
      
      // Determine banner variant based on feature flag
      if (bannerStyleFlag === 'premium') {
        setBannerVariant('premium');
      } else if (bannerStyleFlag === 'minimal') {
        setBannerVariant('minimal');
      } else {
        setBannerVariant('default');
      }
      
      // Show banner if conditions are met
      const shouldShow = views >= 3 && 
                        showBannerFlag === true && 
                        abTestFlag === true;
      
      console.log('[Banner] Should show banner?', shouldShow);
      setShowBanner(shouldShow);
      
      // Track feature flag evaluation for PostHog demo
      posthog.capture('feature_flag_evaluated', {
        flag_name: 'show_booking_banner',
        flag_value: showBannerFlag,
        page_views: views,
        banner_shown: shouldShow
      });
      
    } catch (error) {
      console.error('[Banner] Error checking banner visibility:', error);
    }
  }, [posthog, getFeatureFlag]);

  // Check banner visibility on route change
  useEffect(() => {
    // Increment page view count
    const currentViews = getSessionPageViews();
    sessionStorage.setItem('page_view_count', (currentViews + 1).toString());
    
    // Check banner visibility after a short delay
    const timer = setTimeout(() => {
      checkBannerVisibility();
    }, 500);
    
    return () => clearTimeout(timer);
  }, [location.pathname, checkBannerVisibility]);

  // Initial check when component mounts
  useEffect(() => {
    checkBannerVisibility();
  }, [checkBannerVisibility]);

  // Debug function for PostHog demo
  const debugBanner = useCallback(() => {
    if (!posthog) {
      console.log('PostHog not initialized');
      return;
    }
    
    const views = getSessionPageViews();
    const debugInfo = {
      views,
      showBanner,
      bannerVariant,
      location: location.pathname,
      feature_flags: {
        show_booking_banner: posthog.isFeatureEnabled('show_booking_banner'),
        booking_banner_ab_test: posthog.isFeatureEnabled('booking_banner_ab_test'),
        banner_style_variant: posthog.isFeatureEnabled('banner_style_variant')
      },
      posthog_initialized: !!posthog,
      distinct_id: posthog.get_distinct_id(),
      session_id: posthog.get_session_id()
    };
    
    console.log('Banner Debug (PostHog Demo):', debugInfo);
    return debugInfo;
  }, [posthog, showBanner, bannerVariant, location.pathname]);

  // Make debug function available globally for demo
  useEffect(() => {
    window.debugBanner = debugBanner;
    return () => delete window.debugBanner;
  }, [debugBanner]);

  const handleClose = () => {
    setShowBanner(false);
    posthog?.capture('banner_closed', { 
      page: location.pathname,
      views: getSessionPageViews(),
      banner_variant: bannerVariant,
      feature_flag_demo: true
    });
  };

  const handleBookNow = () => {
    posthog?.capture('banner_cta_clicked', {
      cta_type: 'book_now',
      banner_variant: bannerVariant,
      page: location.pathname,
      conversion_event: true
    });
  };

  if (!showBanner) return null;

  // Different banner styles based on feature flag
  const getBannerStyles = () => {
    switch (bannerVariant) {
      case 'premium':
        return {
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          color: 'white',
          padding: '1.5rem',
          borderRadius: '8px',
          margin: '1rem',
          boxShadow: '0 8px 32px rgba(0,0,0,0.1)'
        };
      case 'minimal':
        return {
          backgroundColor: '#ffffff',
          color: '#333',
          padding: '0.75rem',
          border: '2px solid #e9ecef',
          borderRadius: '4px',
          margin: '0.5rem'
        };
      default:
        return {
          backgroundColor: '#f8f9fa',
          color: '#333',
          padding: '1rem',
          borderTop: '1px solid #dee2e6'
        };
    }
  };

  const bannerStyles = getBannerStyles();

  return (
    <div style={{
      position: 'fixed',
      bottom: 0,
      left: 0,
      right: 0,
      ...bannerStyles,
      zIndex: 1000,
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }}>
      <div>
        <h3 style={{ margin: 0, marginBottom: '0.5rem' }}>
          {bannerVariant === 'premium' ? '🌟 Ready for your perfect getaway?' : 
           bannerVariant === 'minimal' ? 'Book now' : 
           'Ready to book your stay?'}
        </h3>
        <p style={{ margin: 0 }}>
          {bannerVariant === 'minimal' ? 'Check availability' : 
           'Check availability and book your perfect getaway today!'}
        </p>
        {bannerVariant === 'premium' && (
          <button
            onClick={handleBookNow}
            style={{
              background: 'rgba(255,255,255,0.2)',
              border: '1px solid rgba(255,255,255,0.3)',
              color: 'white',
              padding: '0.5rem 1rem',
              borderRadius: '4px',
              cursor: 'pointer',
              marginTop: '0.5rem'
            }}
          >
            Book Now →
          </button>
        )}
      </div>
      <button
        onClick={handleClose}
        style={{
          background: 'none',
          border: 'none',
          fontSize: '1.5rem',
          cursor: 'pointer',
          padding: '0.5rem',
          color: 'inherit'
        }}
        aria-label="Close banner"
      >
        &times;
      </button>
    </div>
  );
};

export default Banner;