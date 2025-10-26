import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import posthog from 'posthog-js'
import { PostHogProvider } from 'posthog-js/react'

// Initialize PostHog manually first
const posthogKey = import.meta.env.VITE_PUBLIC_POSTHOG_KEY
const posthogHost = import.meta.env.VITE_PUBLIC_POSTHOG_HOST

console.log('Initializing PostHog with:', {
  key: posthogKey ? '*** Key is set ***' : 'MISSING KEY',
  host: posthogHost
})

if (posthogKey && posthogHost) {
  try {
    posthog.init(posthogKey, {
      api_host: posthogHost,
      capture_pageview: true,
      capture_pageleave: true,
      debug: import.meta.env.MODE === 'development',
      persistence: 'localStorage',
      loaded: (ph) => {
        console.log('[PostHog] Initialized successfully');
        
        // Initialize page view count if it doesn't exist
        const pageViewCount = ph.get_property('$pageview_count') || 0;
        ph.register({
          $pageview_count: pageViewCount,
          $current_url: window.location.href,
          $hostname: window.location.hostname
        });
        
        // Preload feature flags with retry
        const loadFlags = (attempt = 0) => {
          ph.reloadFeatureFlags(() => {
            const flags = {
              show_booking_banner: ph.isFeatureEnabled('show_booking_banner'),
              booking_banner_ab_test: ph.isFeatureEnabled('booking_banner_ab_test')
            };
            
            console.log('[PostHog] Feature flags:', flags);
            
            // If flags are undefined, retry a few times
            if ((flags.show_booking_banner === undefined || 
                 flags.booking_banner_ab_test === undefined) && 
                attempt < 3) {
              console.log(`[PostHog] Some flags undefined, retrying (${attempt + 1}/3)...`);
              setTimeout(() => loadFlags(attempt + 1), 1000 * (attempt + 1));
            }
          });
        };
        
        loadFlags();
      }
    });
  } catch (error) {
    console.error('[PostHog] Initialization error:', error);
  }
} else {
  console.error('[PostHog] Missing configuration. Check VITE_PUBLIC_POSTHOG_KEY and VITE_PUBLIC_POSTHOG_HOST');
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <PostHogProvider client={posthog}>
      <App />
    </PostHogProvider>
  </StrictMode>,
)
