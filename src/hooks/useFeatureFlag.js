import { useState, useEffect } from 'react'
import posthog from 'posthog-js'

export function useFeatureFlag(flagName, defaultValue = false) {
  const [isEnabled, setIsEnabled] = useState(defaultValue)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    if (!posthog) {
      console.warn('PostHog not initialized')
      setIsLoading(false)
      return
    }

    // Check if feature flags are already loaded
    if (posthog.featureFlags) {
      const enabled = posthog.isFeatureEnabled(flagName)
      setIsEnabled(!!enabled)
      setIsLoading(false)
    } else {
      // If flags aren't loaded yet, wait for them
      const unsubscribe = posthog.onFeatureFlags(() => {
        const enabled = posthog.isFeatureEnabled(flagName)
        setIsEnabled(!!enabled)
        setIsLoading(false)
      })

      // Set a timeout in case flags never load
      const timeout = setTimeout(() => {
        setIsLoading(false)
      }, 2000)

      return () => {
        clearTimeout(timeout)
        if (unsubscribe) unsubscribe()
      }
    }
  }, [flagName])

  return { isEnabled, isLoading }
}
