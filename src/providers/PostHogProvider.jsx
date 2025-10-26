// src/providers/PostHogProvider.jsx
import { useEffect, useState } from 'react'
import { PostHogProvider as PHProvider } from 'posthog-js/react'
import posthog from 'posthog-js'

export function PostHogProvider({ children }) {
  const [isReady, setIsReady] = useState(false)

  useEffect(() => {
    const posthogKey = import.meta.env.VITE_PUBLIC_POSTHOG_KEY
    const posthogHost = import.meta.env.VITE_PUBLIC_POSTHOG_HOST

    console.log('PostHog Configuration:')
    console.log('- Key:', posthogKey)
    console.log('- Host:', posthogHost)
    console.log('- Key starts with phc_:', posthogKey?.startsWith('phc_'))

    if (!posthogKey || !posthogHost) {
      console.warn('PostHog not configured. Analytics disabled.')
      setIsReady(true)
      return
    }

    try {
      posthog.init(posthogKey, {
        api_host: posthogHost,
        capture_pageview: false, // We'll handle this manually
        api_method: 'POST',
        debug: true, // Enable debug for demo
        loaded: (posthog) => {
          console.log('PostHog loaded successfully!')
          console.log('Feature flags available:', !!posthog.featureFlags)
          
          // Test feature flags immediately
          setTimeout(() => {
            const showBanner = posthog.isFeatureEnabled('show_booking_banner')
            const abTest = posthog.isFeatureEnabled('booking_banner_ab_test')
            console.log('Feature flags:', { showBanner, abTest })
          }, 1000)
        }
      })
      console.log('PostHog initialized successfully')
    } catch (error) {
      console.error('Failed to initialize PostHog:', error)
    } finally {
      setIsReady(true)
    }

    return () => {
      if (posthog && typeof posthog.shutdown === 'function') {
        posthog.shutdown()
      }
    }
  }, [])

  // Don't render children until we've attempted to initialize PostHog
  if (!isReady) {
    return null
  }

  return <PHProvider client={posthog}>{children}</PHProvider>
}