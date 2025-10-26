import posthog from 'posthog-js'

export async function checkFeatureFlag(flagName, defaultValue = false) {
  if (!posthog) {
    console.warn('PostHog not initialized')
    return defaultValue
  }

  return new Promise((resolve) => {
    if (posthog.featureFlags) {
      resolve(!!posthog.isFeatureEnabled(flagName) ?? defaultValue)
    } else {
      const unsubscribe = posthog.onFeatureFlags(() => {
        resolve(!!posthog.isFeatureEnabled(flagName) ?? defaultValue)
        if (unsubscribe) unsubscribe()
      })

      // Timeout in case flags never load
      setTimeout(() => {
        resolve(defaultValue)
        if (unsubscribe) unsubscribe()
      }, 2000)
    }
  })
}
