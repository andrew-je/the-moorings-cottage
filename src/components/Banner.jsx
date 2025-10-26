// src/components/Banner.jsx
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { posthogTracking } from '../services/posthogTracking';

const getSessionPageViews = () => {
  if (typeof window === 'undefined') return 0;
  return parseInt(sessionStorage.getItem('page_view_count') || '0', 10);
};

const Banner = () => {
  const [showBanner, setShowBanner] = useState(false);
  const location = useLocation();

  // Check if banner should be shown based on page views
  const checkBannerVisibility = () => {
    try {
      const views = getSessionPageViews();
      console.log('[Banner] Checking visibility. Page views:', views);
      
      // Show banner after 3 page views (simplified approach for serverless)
      const shouldShow = views >= 3;
      
      console.log('[Banner] Should show banner?', shouldShow);
      setShowBanner(shouldShow);
      
    } catch (error) {
      console.error('[Banner] Error checking banner visibility:', error);
    }
  };

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
  }, [location.pathname]);

  // Initial check when component mounts
  useEffect(() => {
    checkBannerVisibility();
  }, []);

  // Debug function
  const debugBanner = () => {
    const views = getSessionPageViews();
    const debugInfo = {
      views,
      showBanner,
      location: location.pathname
    };
    
    console.log('Banner Debug:', debugInfo);
    return debugInfo;
  };

  // Make debug function available globally
  useEffect(() => {
    window.debugBanner = debugBanner;
    return () => delete window.debugBanner;
  }, [showBanner, location.pathname]);

  const handleClose = () => {
    setShowBanner(false);
    posthogTracking.track('banner_closed', { 
      page: location.pathname,
      views: getSessionPageViews()
    });
  };

  if (!showBanner) return null;

  return (
    <div style={{
      position: 'fixed',
      bottom: 0,
      left: 0,
      right: 0,
      backgroundColor: '#f8f9fa',
      padding: '1rem',
      borderTop: '1px solid #dee2e6',
      zIndex: 1000,
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }}>
      <div>
        <h3 style={{ margin: 0, marginBottom: '0.5rem' }}>Ready to book your stay?</h3>
        <p style={{ margin: 0 }}>Check availability and book your perfect getaway today!</p>
      </div>
      <button
        onClick={handleClose}
        style={{
          background: 'none',
          border: 'none',
          fontSize: '1.5rem',
          cursor: 'pointer',
          padding: '0.5rem'
        }}
        aria-label="Close banner"
      >
        &times;
      </button>
    </div>
  );
};

export default Banner;