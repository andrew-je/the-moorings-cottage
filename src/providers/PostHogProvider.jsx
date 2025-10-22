// src/providers/PostHogProvider.jsx
import { PostHogProvider as PHProvider } from 'posthog-js/react';
import posthog from 'posthog-js';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Get PostHog configuration from environment variables
const POSTHOG_KEY = import.meta.env.VITE_POSTHOG_KEY;
const POSTHOG_HOST = import.meta.env.VITE_POSTHOG_HOST || 'https://app.posthog.com';

// Validate required environment variables
if (!POSTHOG_KEY) {
  console.error('Missing required environment variable: VITE_POSTHOG_KEY');
}
if (!POSTHOG_HOST) {
  console.warn('VITE_POSTHOG_HOST not set, using default:', POSTHOG_HOST);
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
    try {
      if (typeof window === 'undefined' || !window.posthog) return;
      
      // Use a small delay to ensure PostHog is fully initialized
      const timer = setTimeout(() => {
        try {
          const currentCount = posthog.get_property('$pageview_count') || 0;
          const newCount = currentCount + 1;
          
          console.log(`Page view ${newCount} - ${location.pathname}`);
          
          // Update the page view count
          posthog.register({
            $pageview_count: newCount
          }, { 
            $set_once: { 
              first_visit: new Date().toISOString() 
            } 
          });
          
          // Capture the pageview event
          posthog.capture('$pageview', {
            $current_url: window.location.href,
            $pathname: location.pathname
          });
          
          console.log('Current page view count:', newCount);
        } catch (error) {
          console.error('Error tracking page view:', error);
        }
      }, 100);
      
      return () => clearTimeout(timer);
    } catch (error) {
      console.error('Error in page view effect:', error);
    }
  }, [location.pathname])

  return <PHProvider client={posthog}>{children}</PHProvider>
}