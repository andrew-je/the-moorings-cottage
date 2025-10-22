import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { usePostHog } from 'posthog-js/react';

// Hook for tracking page views and scroll depth
export const usePageTracking = () => {
  const location = useLocation();
  const posthog = usePostHog();
  const startTime = useRef(Date.now());
  const lastScrollDepth = useRef(0);

  useEffect(() => {
    if (!posthog) return;
    // Track page view when location changes
    const pageTitle = document.title;
    posthog.capture('$pageview', { path: location.pathname, title: pageTitle });
    
    // Reset timer for new page
    startTime.current = Date.now();
    lastScrollDepth.current = 0;

    // Track time on page when component unmounts
    return () => {
      const timeOnPage = (Date.now() - startTime.current) / 1000;
      posthog.capture('time on page', { seconds: timeOnPage });
    };
  }, [location, posthog]);

  useEffect(() => {
    if (!posthog) return;
    // Track scroll depth
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = Math.round((scrollTop / docHeight) * 100);
      
      if (scrollPercent > lastScrollDepth.current) {
        posthog.capture('scroll depth', { percent: scrollPercent });
        lastScrollDepth.current = scrollPercent;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [posthog]);
};

// Hook for tracking user interactions
export const useAnalytics = () => {
  const posthog = usePostHog();

  const trackBooking = (action, details = {}) => {
    posthog?.capture('booking', { action, ...details });
  };

  const trackContact = (method) => {
    posthog?.capture('contact', { method });
  };

  const trackGallery = (action, imageIndex) => {
    posthog?.capture('gallery', { action, imageIndex });
  };

  const trackVideo = (action, videoTitle) => {
    posthog?.capture('video', { action, videoTitle });
  };

  const trackSocial = (platform) => {
    posthog?.capture('social', { platform });
  };

  const trackExternalLink = (url, linkText) => {
    posthog?.capture('external link', { url, linkText });
  };

  const trackFormSubmission = (formName) => {
    posthog?.capture('form submission', { formName });
  };

  const trackEvent = (action, category, label, value) => {
    posthog?.capture(action, { category, label, value });
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
