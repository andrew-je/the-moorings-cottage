// src/providers/PostHogProvider.jsx
import { PostHogProvider as PHProvider } from 'posthog-js/react';
import posthog from 'posthog-js';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Get PostHog configuration from environment variables
const POSTHOG_KEY = import.meta.env.VITE_PUBLIC_POSTHOG_KEY;
const POSTHOG_HOST = import.meta.env.VITE_PUBLIC_POSTHOG_HOST || 'https://app.posthog.com';

// Log environment for debugging
console.log('PostHog Configuration:', {
  key: POSTHOG_KEY ? '*** Key is set ***' : 'MISSING KEY',
  host: POSTHOG_HOST
});

// Validate required environment variables
if (!POSTHOG_KEY) {
  console.error('Missing required environment variable: VITE_PUBLIC_POSTHOG_KEY');
}
if (!POSTHOG_HOST) {
  console.warn('VITE_PUBLIC_POSTHOG_HOST not set, using default:', POSTHOG_HOST);
}

export function PostHogProvider({ children }) {
  const location = useLocation()

  // Initialize PostHog only once
  useEffect(() => {
    try {
      if (typeof window === 'undefined') return;
      
      console.log('Initializing PostHog...');
      
      // Initialize PostHog with error handling
      posthog.init(POSTHOG_KEY, {
        api_host: POSTHOG_HOST,
        capture_pageview: false, // We'll handle page views manually
        capture_pageleave: true,
        persistence: 'localStorage',
        loaded: (ph) => {
          try {
            console.log('PostHog loaded successfully');
            // Set initial page view count if it doesn't exist
            const pageViewCount = ph.get_property('$pageview_count') || 0;
            ph.register({
              $pageview_count: pageViewCount
            });
            console.log('Initial page view count:', pageViewCount);
          } catch (error) {
            console.error('Error in PostHog loaded callback:', error);
          }
        }
      });
    } catch (error) {
      console.error('Error initializing PostHog:', error);
    }
  }, [])

  // Track page views and update counter
  useEffect(() => {
    if (typeof window === 'undefined' || !window.posthog) return;
    
    const trackPageView = () => {
      try {
        // Get the current count or default to 0
        const currentCount = posthog.get_property('$pageview_count') || 0;
        const newCount = currentCount + 1;
        
        console.log(`Page view ${newCount} - ${location.pathname}`);
        
        // Update the page view count
        posthog.register({
          $pageview_count: newCount
        });
        
        // Force an immediate sync to ensure the property is set
        posthog.capture('$pageview', {
          $current_url: window.location.href,
          $pathname: location.pathname,
          $set: {
            $pageview_count: newCount
          }
        });
        
        console.log('Current page view count:', newCount);
        
        // Return the new count for debugging
        return newCount;
      } catch (error) {
        console.error('Error tracking page view:', error);
        return 0;
      }
    };
    
    // Track the page view
    const newCount = trackPageView();
    
    // For debugging - log the current state
    console.log('Page view tracked. New count:', newCount);
    
    // Set up an interval to ensure the count is updated
    // This is a workaround for any race conditions
    const interval = setInterval(() => {
      const currentCount = posthog.get_property('$pageview_count') || 0;
      if (currentCount < newCount) {
        console.log('Fixing page view count from', currentCount, 'to', newCount);
        posthog.register({
          $pageview_count: newCount
        });
      }
    }, 1000);
    
    return () => {
      clearInterval(interval);
    };
  }, [location.pathname])

  return <PHProvider client={posthog}>{children}</PHProvider>
}