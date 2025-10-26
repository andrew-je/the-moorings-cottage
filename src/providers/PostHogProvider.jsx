// src/providers/PostHogProvider.jsx
import { useEffect, useState } from 'react'
import { posthogTracking } from '../services/posthogTracking'

export function PostHogProvider({ children }) {
  const [isReady, setIsReady] = useState(false)

  useEffect(() => {
    // For Vercel deployment, we use serverless functions
    // For local development, we can optionally use direct PostHog
    const isVercel = typeof window !== 'undefined' && 
      (window.location.hostname.includes('vercel.app') || 
       window.location.hostname.includes('vercel.com'))
    
    if (isVercel) {
      console.log('PostHog: Using Vercel serverless function approach')
      setIsReady(true)
    } else {
      // Local development fallback
      console.log('PostHog: Local development mode')
      setIsReady(true)
    }
  }, [])

  // Always render children - tracking will work via serverless function
  return <>{children}</>
}