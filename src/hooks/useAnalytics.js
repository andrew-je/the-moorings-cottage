import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { posthogTracking } from '../services/posthogTracking';

// Hook for tracking page views and scroll depth
export const usePageTracking = () => {
  const location = useLocation();
  const startTime = useRef(Date.now());
  const lastScrollDepth = useRef(0);

  useEffect(() => {
    try {
      // Track page view when location changes
      const pageTitle = document.title;
      posthogTracking.trackPageView(location.pathname, pageTitle);
      
      // Reset timer for new page
      startTime.current = Date.now();
      lastScrollDepth.current = 0;
    } catch (error) {
      console.error('Error tracking page view:', error);
    }

    // Track time on page when component unmounts
    return () => {
      try {
        const timeOnPage = (Date.now() - startTime.current) / 1000;
        posthogTracking.track('time on page', { seconds: timeOnPage });
      } catch (error) {
        console.error('Error tracking time on page:', error);
      }
    };
  }, [location]);

  useEffect(() => {
    // Track scroll depth
    const handleScroll = () => {
      try {
        const scrollTop = window.pageYOffset;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollPercent = Math.round((scrollTop / docHeight) * 100);
        
        if (scrollPercent > lastScrollDepth.current) {
          posthogTracking.track('scroll depth', { percent: scrollPercent });
          lastScrollDepth.current = scrollPercent;
        }
      } catch (error) {
        console.error('Error tracking scroll depth:', error);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
};

// Hook for tracking user interactions
export const useAnalytics = () => {
  const trackBooking = (action, details = {}) => {
    try {
      posthogTracking.trackBookingAction(action, details);
    } catch (error) {
      console.error('Error tracking booking:', error);
    }
  };

  const trackContact = (method) => {
    try {
      posthogTracking.track('contact', { method });
    } catch (error) {
      console.error('Error tracking contact:', error);
    }
  };

  const trackGallery = (action, imageIndex) => {
    try {
      posthogTracking.trackGalleryView(imageIndex);
    } catch (error) {
      console.error('Error tracking gallery:', error);
    }
  };

  const trackVideo = (action, videoTitle) => {
    try {
      posthogTracking.track('video', { action, videoTitle });
    } catch (error) {
      console.error('Error tracking video:', error);
    }
  };

  const trackSocial = (platform) => {
    try {
      posthogTracking.track('social', { platform });
    } catch (error) {
      console.error('Error tracking social:', error);
    }
  };

  const trackExternalLink = (url, linkText) => {
    try {
      posthogTracking.track('external link', { url, linkText });
    } catch (error) {
      console.error('Error tracking external link:', error);
    }
  };

  const trackFormSubmission = (formName) => {
    try {
      posthogTracking.trackFormSubmission(formName);
    } catch (error) {
      console.error('Error tracking form submission:', error);
    }
  };

  const trackEvent = (action, category, label, value) => {
    try {
      posthogTracking.track(action, { category, label, value });
    } catch (error) {
      console.error('Error tracking event:', error);
    }
  };

  return {
    trackBooking,
    trackContact,
    trackGallery,
    trackVideo,
    trackSocial,
    trackExternalLink,
    trackFormSubmission,
    trackEvent
  };
};
