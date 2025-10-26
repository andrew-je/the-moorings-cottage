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
    if (!posthog) {
      console.warn('PostHog not initialized - page tracking disabled');
      return;
    }
    
    try {
      // Track page view when location changes
      const pageTitle = document.title;
      posthog.capture('$pageview', { 
        path: location.pathname, 
        title: pageTitle,
        // Add custom properties for PostHog demo
        page_type: location.pathname === '/' ? 'home' : 'content',
        site_section: location.pathname.split('/')[1] || 'home'
      });
      
      // Reset timer for new page
      startTime.current = Date.now();
      lastScrollDepth.current = 0;
    } catch (error) {
      console.error('Error tracking page view:', error);
    }

    // Track time on page when component unmounts
    return () => {
      if (!posthog) return;
      
      try {
        const timeOnPage = (Date.now() - startTime.current) / 1000;
        posthog.capture('time_on_page', { 
          seconds: timeOnPage,
          page: location.pathname
        });
      } catch (error) {
        console.error('Error tracking time on page:', error);
      }
    };
  }, [location, posthog]);

  useEffect(() => {
    if (!posthog) return;
    
    // Track scroll depth
    const handleScroll = () => {
      try {
        const scrollTop = window.pageYOffset;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollPercent = Math.round((scrollTop / docHeight) * 100);
        
        if (scrollPercent > lastScrollDepth.current) {
          posthog.capture('scroll_depth', { 
            percent: scrollPercent,
            page: location.pathname
          });
          lastScrollDepth.current = scrollPercent;
        }
      } catch (error) {
        console.error('Error tracking scroll depth:', error);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [posthog, location.pathname]);
};

// Hook for tracking user interactions
export const useAnalytics = () => {
  const posthog = usePostHog();

  const trackBooking = (action, details = {}) => {
    if (!posthog) {
      console.warn('PostHog not initialized - trackBooking not sent');
      return;
    }
    try {
      posthog.capture('booking_action', { 
        action, 
        ...details,
        // Add user properties for segmentation
        user_type: 'potential_customer',
        funnel_stage: action
      });
    } catch (error) {
      console.error('Error tracking booking:', error);
    }
  };

  const trackContact = (method) => {
    if (!posthog) {
      console.warn('PostHog not initialized - trackContact not sent');
      return;
    }
    try {
      posthog.capture('contact_method', { 
        method,
        user_intent: 'inquiry'
      });
    } catch (error) {
      console.error('Error tracking contact:', error);
    }
  };

  const trackGallery = (action, imageIndex) => {
    if (!posthog) {
      console.warn('PostHog not initialized - trackGallery not sent');
      return;
    }
    try {
      posthog.capture('gallery_interaction', { 
        action, 
        image_index: imageIndex,
        engagement_type: 'visual_content'
      });
    } catch (error) {
      console.error('Error tracking gallery:', error);
    }
  };

  const trackVideo = (action, videoTitle) => {
    if (!posthog) {
      console.warn('PostHog not initialized - trackVideo not sent');
      return;
    }
    try {
      posthog.capture('video_interaction', { 
        action, 
        video_title: videoTitle,
        content_type: 'video'
      });
    } catch (error) {
      console.error('Error tracking video:', error);
    }
  };

  const trackSocial = (platform) => {
    if (!posthog) {
      console.warn('PostHog not initialized - trackSocial not sent');
      return;
    }
    try {
      posthog.capture('social_click', { 
        platform,
        social_engagement: true
      });
    } catch (error) {
      console.error('Error tracking social:', error);
    }
  };

  const trackExternalLink = (url, linkText) => {
    if (!posthog) {
      console.warn('PostHog not initialized - trackExternalLink not sent');
      return;
    }
    try {
      posthog.capture('external_link_click', { 
        url, 
        link_text: linkText,
        link_type: 'external'
      });
    } catch (error) {
      console.error('Error tracking external link:', error);
    }
  };

  const trackFormSubmission = (formName) => {
    if (!posthog) {
      console.warn('PostHog not initialized - trackFormSubmission not sent');
      return;
    }
    try {
      posthog.capture('form_submission', { 
        form_name: formName,
        conversion_event: true
      });
    } catch (error) {
      console.error('Error tracking form submission:', error);
    }
  };

  const trackEvent = (action, category, label, value) => {
    if (!posthog) {
      console.warn('PostHog not initialized - trackEvent not sent');
      return;
    }
    try {
      posthog.capture(action, { 
        category, 
        label, 
        value,
        custom_event: true
      });
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
