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
  posthog.init(posthogKey, {
    api_host: posthogHost,
    capture_pageview: true,
    capture_pageleave: true,
    debug: import.meta.env.MODE === 'development',
    loaded: (ph) => {
      console.log('PostHog loaded successfully', ph)
      // Initialize page view count if it doesn't exist
      const pageViewCount = ph.get_property('$pageview_count') || 0
      ph.register({
        $pageview_count: pageViewCount
      })
    }
  })
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <PostHogProvider client={posthog}>
      <App />
    </PostHogProvider>
  </StrictMode>,
)
