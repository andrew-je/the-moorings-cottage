import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import analytics from '../services/analytics';

// Hook for tracking page views and scroll depth
export const usePageTracking = () => {
  const location = useLocation();
  const startTime = useRef(Date.now());
  const lastScrollDepth = useRef(0);

  useEffect(() => {
    // Track page view when location changes
    const pageTitle = document.title;
    analytics.trackPageView(location.pathname, pageTitle);
    
    // Reset timer for new page
    startTime.current = Date.now();
    lastScrollDepth.current = 0;

    // Track time on page when component unmounts
    return () => {
      const timeOnPage = (Date.now() - startTime.current) / 1000;
      analytics.trackTimeOnPage(timeOnPage);
    };
  }, [location]);

  useEffect(() => {
    // Track scroll depth
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = Math.round((scrollTop / docHeight) * 100);
      
      if (scrollPercent > lastScrollDepth.current) {
        analytics.trackScrollDepth(scrollPercent);
        lastScrollDepth.current = scrollPercent;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
};

// Hook for tracking user interactions
export const useAnalytics = () => {
  const trackBooking = (action, details = {}) => {
    analytics.trackBooking(action, details);
  };

  const trackContact = (method) => {
    analytics.trackContact(method);
  };

  const trackGallery = (action, imageIndex) => {
    analytics.trackGallery(action, imageIndex);
  };

  const trackVideo = (action, videoTitle) => {
    analytics.trackVideo(action, videoTitle);
  };

  const trackSocial = (platform) => {
    analytics.trackSocial(platform);
  };

  const trackExternalLink = (url, linkText) => {
    analytics.trackExternalLink(url, linkText);
  };

  const trackFormSubmission = (formName) => {
    analytics.trackFormSubmission(formName);
  };

  const trackEvent = (action, category, label, value) => {
    analytics.trackEvent(action, category, label, value);
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
