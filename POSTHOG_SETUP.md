# PostHog Integration for Vercel

This project now uses PostHog with Vercel serverless functions for secure analytics tracking.

## Setup Complete ✅

### What's Been Implemented:

1. **Serverless Function**: `/api/posthog.js` - Handles PostHog events securely
2. **Tracking Service**: `src/services/posthogTracking.js` - Client-side tracking interface
3. **Updated Components**: All analytics hooks and components now use the serverless approach
4. **Banner System**: Shows booking banner after 3 page views (simplified for serverless)

### Vercel Environment Variables:

Make sure you have this set in your Vercel dashboard:
- `POSTHOG_API_KEY` = your PHX key (starts with `phx_`)

### How It Works:

1. **Client-side**: Your React app calls the tracking service
2. **Serverless Function**: `/api/posthog` receives events and forwards them to PostHog using your PHX key
3. **Secure**: Your PHX key never leaves the server
4. **Analytics**: All events are tracked in PostHog dashboard

### Testing:

1. Deploy to Vercel
2. Visit your site and navigate between pages
3. Check browser Network tab for `/api/posthog` requests
4. Check PostHog dashboard for incoming events
5. Banner should appear after viewing 3 pages

### Debug:

In browser console, run:
```javascript
window.debugBanner() // Check banner status
```

### Events Tracked:

- Page views (`$pageview`)
- Scroll depth
- Time on page
- Gallery interactions
- Button clicks
- Form submissions
- Banner interactions

All events are sent securely via the serverless function to PostHog!
