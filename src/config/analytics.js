// Analytics Configuration
export const ANALYTICS_CONFIG = {
  // Google Analytics IDs
  GA_MEASUREMENT_ID: 'UA-175035074-1',
  GA4_MEASUREMENT_ID: null, // Add your GA4 ID here if you have one
  
  // Event Categories
  CATEGORIES: {
    ENGAGEMENT: 'engagement',
    NAVIGATION: 'navigation',
    BOOKING: 'booking',
    GALLERY: 'gallery',
    VIDEO: 'video',
    SOCIAL: 'social',
    CONTACT: 'contact',
    FORM: 'form',
    PROPERTY: 'property'
  },
  
  // Event Actions
  ACTIONS: {
    PAGE_VIEW: 'page_view',
    BUTTON_CLICK: 'button_click',
    LINK_CLICK: 'link_click',
    FORM_SUBMIT: 'form_submit',
    VIDEO_PLAY: 'video_play',
    GALLERY_VIEW: 'gallery_view',
    BOOKING_START: 'booking_start',
    CONTACT_METHOD: 'contact_method',
    SOCIAL_CLICK: 'social_click',
    SCROLL_DEPTH: 'scroll_depth',
    TIME_ON_PAGE: 'time_on_page'
  },
  
  // Page Titles for tracking
  PAGE_TITLES: {
    '/': 'Home - The Moorings Cottage',
    '/cottage': 'The Cottage - The Moorings Cottage',
    '/gallery': 'Gallery - The Moorings Cottage',
    '/booking': 'Booking & Availability - The Moorings Cottage',
    '/review': 'Reviews - The Moorings Cottage',
    '/area': 'Local Area - The Moorings Cottage',
    '/contact': 'Contact & Directions - The Moorings Cottage',
    '/terms': 'Terms & Conditions - The Moorings Cottage'
  },
  
  // Custom Dimensions (if using GA4)
  CUSTOM_DIMENSIONS: {
    USER_TYPE: 'user_type',
    PROPERTY_VIEWED: 'property_viewed',
    BOOKING_STAGE: 'booking_stage'
  },
  
  // Enhanced Ecommerce (if needed)
  ECOMMERCE: {
    PROPERTY_ID: 'moorings_cottage',
    PROPERTY_NAME: 'The Moorings Cottage',
    PROPERTY_CATEGORY: 'holiday_rental',
    CURRENCY: 'GBP'
  }
};

// Event tracking helpers
export const trackPageView = (path, title) => {
  if (typeof window !== 'undefined' && window.gtag) {
    const pageData = {
      page_title: title || ANALYTICS_CONFIG.PAGE_TITLES[path] || document.title,
      page_location: window.location.origin + path,
      page_path: path
    };
    
    window.gtag('config', ANALYTICS_CONFIG.GA_MEASUREMENT_ID, pageData);
    
    if (ANALYTICS_CONFIG.GA4_MEASUREMENT_ID) {
      window.gtag('config', ANALYTICS_CONFIG.GA4_MEASUREMENT_ID, pageData);
    }
  }
};

export const trackEvent = (action, category, label, value) => {
  if (typeof window !== 'undefined' && window.gtag) {
    const eventData = {
      event_category: category,
      event_label: label,
      value: value
    };
    
    window.gtag('event', action, eventData);
    
    if (ANALYTICS_CONFIG.GA4_MEASUREMENT_ID) {
      window.gtag('event', action, {
        category: category,
        label: label,
        value: value
      });
    }
  }
};

// Enhanced Ecommerce tracking
export const trackPropertyView = (propertyData = {}) => {
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
};

// User engagement tracking
export const trackEngagement = (action, details = {}) => {
  trackEvent(
    action,
    ANALYTICS_CONFIG.CATEGORIES.ENGAGEMENT,
    details.label || action,
    details.value || 1
  );
};

// Booking funnel tracking
export const trackBookingStep = (step, details = {}) => {
  trackEvent(
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
};
