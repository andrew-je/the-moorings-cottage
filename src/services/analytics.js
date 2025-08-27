import { ANALYTICS_CONFIG, trackPageView as configTrackPageView, trackEvent as configTrackEvent } from '../config/analytics';

// Analytics Service for Google Analytics Integration
class Analytics {
  constructor() {
    this.isInitialized = false;
  }

  // Initialize Google Analytics
  init() {
    if (this.isInitialized) return;

    // Initialize gtag
    window.dataLayer = window.dataLayer || [];
    function gtag() {
      window.dataLayer.push(arguments);
    }
    window.gtag = gtag;

    // Load Google Analytics script
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${ANALYTICS_CONFIG.GA_MEASUREMENT_ID}`;
    document.head.appendChild(script);

    // Configure Google Analytics
    gtag('js', new Date());
    gtag('config', ANALYTICS_CONFIG.GA_MEASUREMENT_ID, {
      page_title: document.title,
      page_location: window.location.href,
      send_page_view: false // We'll handle page views manually
    });

    // Configure GA4 if available
    if (ANALYTICS_CONFIG.GA4_MEASUREMENT_ID) {
      gtag('config', ANALYTICS_CONFIG.GA4_MEASUREMENT_ID, {
        page_title: document.title,
        page_location: window.location.href,
        send_page_view: false
      });
    }

    this.isInitialized = true;
    console.log('Google Analytics initialized');
  }

  // Track page views
  trackPageView(path, title) {
    if (!this.isInitialized) {
      this.init();
    }

    configTrackPageView(path, title);
  }

  // Track custom events
  trackEvent(action, category, label, value) {
    if (!this.isInitialized) {
      this.init();
    }

    configTrackEvent(action, category, label, value);
  }

  // Track booking interactions
  trackBooking(action, details = {}) {
    this.trackEvent(
      ANALYTICS_CONFIG.ACTIONS.BOOKING_START,
      ANALYTICS_CONFIG.CATEGORIES.BOOKING,
      action,
      1
    );
    
    // Track specific booking events
    if (details.step) {
      this.trackEvent('booking_step', ANALYTICS_CONFIG.CATEGORIES.BOOKING, details.step, 1);
    }
    
    if (details.property) {
      this.trackEvent('property_view', ANALYTICS_CONFIG.CATEGORIES.PROPERTY, details.property, 1);
    }
  }

  // Track contact interactions
  trackContact(method) {
    this.trackEvent(
      ANALYTICS_CONFIG.ACTIONS.CONTACT_METHOD,
      ANALYTICS_CONFIG.CATEGORIES.CONTACT,
      method,
      1
    );
  }

  // Track gallery interactions
  trackGallery(action, imageIndex) {
    this.trackEvent(
      ANALYTICS_CONFIG.ACTIONS.GALLERY_VIEW,
      ANALYTICS_CONFIG.CATEGORIES.GALLERY,
      action,
      imageIndex
    );
  }

  // Track video interactions
  trackVideo(action, videoTitle) {
    this.trackEvent(
      ANALYTICS_CONFIG.ACTIONS.VIDEO_PLAY,
      ANALYTICS_CONFIG.CATEGORIES.VIDEO,
      action,
      1
    );
  }

  // Track social media clicks
  trackSocial(platform) {
    this.trackEvent(
      ANALYTICS_CONFIG.ACTIONS.SOCIAL_CLICK,
      ANALYTICS_CONFIG.CATEGORIES.SOCIAL,
      platform,
      1
    );
  }

  // Track external links
  trackExternalLink(url, linkText) {
    this.trackEvent(
      ANALYTICS_CONFIG.ACTIONS.LINK_CLICK,
      ANALYTICS_CONFIG.CATEGORIES.NAVIGATION,
      linkText,
      1
    );
  }

  // Track form submissions
  trackFormSubmission(formName) {
    this.trackEvent(
      ANALYTICS_CONFIG.ACTIONS.FORM_SUBMIT,
      ANALYTICS_CONFIG.CATEGORIES.FORM,
      formName,
      1
    );
  }

  // Track scroll depth
  trackScrollDepth(percentage) {
    if (percentage % 25 === 0) { // Track at 25%, 50%, 75%, 100%
      this.trackEvent(
        ANALYTICS_CONFIG.ACTIONS.SCROLL_DEPTH,
        ANALYTICS_CONFIG.CATEGORIES.ENGAGEMENT,
        `${percentage}%`,
        1
      );
    }
  }

  // Track time on page
  trackTimeOnPage(duration) {
    this.trackEvent(
      ANALYTICS_CONFIG.ACTIONS.TIME_ON_PAGE,
      ANALYTICS_CONFIG.CATEGORIES.ENGAGEMENT,
      'duration',
      Math.round(duration)
    );
  }

  // Track button clicks
  trackButtonClick(buttonText, location = 'unknown') {
    this.trackEvent(
      ANALYTICS_CONFIG.ACTIONS.BUTTON_CLICK,
      ANALYTICS_CONFIG.CATEGORIES.ENGAGEMENT,
      `${buttonText} (${location})`,
      1
    );
  }

  // Track property views
  trackPropertyView(propertyData = {}) {
    if (typeof window !== 'undefined' && window.gtag) {
      const ecommerceData = {
        items: [{
          item_id: propertyData.id || ANALYTICS_CONFIG.ECOMMERCE.PROPERTY_ID,
          item_name: propertyData.name || ANALYTICS_CONFIG.ECOMMERCE.PROPERTY_NAME,
          item_category: propertyData.category || ANALYTICS_CONFIG.ECOMMERCE.PROPERTY_CATEGORY,
          currency: ANALYTICS_CONFIG.ECOMMERCE.CURRENCY,
          value: propertyData.value || 0
        }]
      };
      
      window.gtag('event', 'view_item', ecommerceData);
    }
  }

  // Track user engagement
  trackEngagement(action, details = {}) {
    this.trackEvent(
      action,
      ANALYTICS_CONFIG.CATEGORIES.ENGAGEMENT,
      details.label || action,
      details.value || 1
    );
  }

  // Track booking funnel
  trackBookingStep(step, details = {}) {
    this.trackEvent(
      ANALYTICS_CONFIG.ACTIONS.BOOKING_START,
      ANALYTICS_CONFIG.CATEGORIES.BOOKING,
      step,
      1
    );
    
    // Track as custom dimension if using GA4
    if (ANALYTICS_CONFIG.GA4_MEASUREMENT_ID && window.gtag) {
      window.gtag('event', 'booking_step', {
        booking_stage: step,
        ...details
      });
    }
  }
}

// Create singleton instance
const analytics = new Analytics();

// Initialize analytics when the service is imported
if (typeof window !== 'undefined') {
  analytics.init();
}

export default analytics;
