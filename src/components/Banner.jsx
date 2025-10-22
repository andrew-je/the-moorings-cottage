import { useEffect, useState } from 'react';
import posthog from 'posthog-js';

const Banner = () => {
  const [showBanner, setShowBanner] = useState(false);
  const [pageViewCount, setPageViewCount] = useState(0);

  // Check banner visibility whenever the component updates or pageViewCount changes
  useEffect(() => {
    const checkBanner = () => {
      try {
        if (typeof window === 'undefined' || !window.posthog) return;
        
        // Get the current page view count
        const currentCount = posthog.get_property('$pageview_count') || 0;
        setPageViewCount(currentCount);
        
        // Show banner if we have 2+ page views
        if (currentCount >= 2) {
          console.log('Showing banner - 2+ page views detected:', currentCount);
          setShowBanner(true);
          posthog.capture('banner_shown', { 
            banner_type: 'check_availability',
            page_view_count: currentCount
          });
        } else {
          console.log('Not showing banner - only', currentCount, 'page views');
          setShowBanner(false);
        }
      } catch (error) {
        console.error('Error checking banner visibility:', error);
      }
    };
    
    // Initial check
    checkBanner();
    
    // Set up an interval to check for updates (in case the property changes)
    const interval = setInterval(checkBanner, 1000);
    
    // Clean up
    return () => clearInterval(interval);
  }, [pageViewCount])

  const handleClose = () => {
    setShowBanner(false)
    posthog.capture('banner_closed', { banner_type: 'check_availability' })
  }

  const handleClick = () => {
    posthog.capture('banner_clicked', { banner_type: 'check_availability' })
    window.location.href = '/booking'
  }

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