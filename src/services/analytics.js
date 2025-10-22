import posthog from 'posthog-js';

class Analytics {
  constructor() {
    this.isInitialized = false;
  }

  // Initialize PostHog
  init() {
    if (this.isInitialized) return;

    posthog.init(import.meta.env.VITE_PUBLIC_POSTHOG_KEY, {
      api_host: import.meta.env.VITE_PUBLIC_POSTHOG_HOST,
      defaults: '2025-05-24',
      capture_exceptions: true,
      debug: import.meta.env.MODE === 'development',
    });

    this.isInitialized = true;
    console.log('PostHog initialized');
  }

  // Track page views
  trackPageView(path = window.location.pathname, title = document.title) {
    this.init();
    posthog.capture('$pageview', { path, title });
  }

  // Track custom events
  trackEvent(event, properties = {}) {
    this.init();
    posthog.capture(event, properties);
  }

  // Track booking interactions
  trackBooking(action, details = {}) {
    this.trackEvent('booking', { action, ...details });
  }

  // Track contact interactions
  trackContact(method) {
    this.trackEvent('contact', { method });
  }

  // Track gallery interactions
  trackGallery(action, imageIndex) {
    this.trackEvent('gallery', { action, imageIndex });
  }

  // Track video interactions
  trackVideo(action, videoTitle) {
    this.trackEvent('video', { action, videoTitle });
  }

  // Track social media clicks
  trackSocial(platform) {
    this.trackEvent('social', { platform });
  }

  // Track external links
  trackExternalLink(url, linkText) {
    this.trackEvent('external link', { url, linkText });
  }

  // Track form submissions
  trackFormSubmission(formName) {
    this.trackEvent('form submission', { formName });
  }

  // Track scroll depth
  trackScrollDepth(percentage) {
    if (percentage % 25 === 0) {
      this.trackEvent('scroll depth', { percent: percentage });
    }
  }

  // Track time on page (seconds)
  trackTimeOnPage(duration) {
    this.trackEvent('time on page', { seconds: duration });
  }

  // Track button clicks
  trackButtonClick(buttonText, location = 'unknown') {
    this.trackEvent('button click', { buttonText, location });
  }

  // Track property views
  trackPropertyView(propertyData = {}) {
    this.trackEvent('view_item', {
      item_id: propertyData.id,
      item_name: propertyData.name,
      item_category: propertyData.category,
      currency: propertyData.currency,
      value: propertyData.value,
    });
  }

  // Track user engagement
  trackEngagement(action, details = {}) {
    this.trackEvent(action, details);
  }

  // Track booking funnel steps
  trackBookingStep(step, details = {}) {
    this.trackEvent('booking_step', { booking_stage: step, ...details });
  }
}

const analytics = new Analytics();
analytics.init();

export default analytics;
