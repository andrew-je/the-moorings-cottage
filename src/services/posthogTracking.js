// src/services/posthogTracking.js
class PostHogTracking {
  constructor() {
    this.isVercel = typeof window !== 'undefined' && window.location.hostname.includes('vercel.app');
    this.distinctId = this.getDistinctId();
  }

  getDistinctId() {
    if (typeof window === 'undefined') return 'anonymous';
    
    let id = localStorage.getItem('posthog_distinct_id');
    if (!id) {
      id = 'user_' + Math.random().toString(36).substr(2, 9);
      localStorage.setItem('posthog_distinct_id', id);
    }
    return id;
  }

  async track(event, properties = {}) {
    if (this.isVercel) {
      // Use serverless function for Vercel
      try {
        await fetch('/api/posthog', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            event,
            properties,
            distinct_id: this.distinctId,
          }),
        });
      } catch (error) {
        console.error('Failed to track event:', error);
      }
    } else {
      // Fallback to direct PostHog for local development
      if (typeof window !== 'undefined' && window.posthog) {
        window.posthog.capture(event, properties);
      }
    }
  }

  // Convenience methods
  trackPageView(path, title) {
    this.track('$pageview', {
      $current_url: path,
      $pathname: path,
      $title: title,
    });
  }

  trackButtonClick(buttonName, page) {
    this.track('button_click', {
      button_name: buttonName,
      page: page,
    });
  }

  trackFormSubmission(formName) {
    this.track('form_submission', {
      form_name: formName,
    });
  }

  trackGalleryView(imageIndex) {
    this.track('gallery_view', {
      image_index: imageIndex,
    });
  }

  trackBookingAction(action, details = {}) {
    this.track('booking_action', {
      action,
      ...details,
    });
  }
}

export const posthogTracking = new PostHogTracking();
