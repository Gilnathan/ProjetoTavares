export function trackInitiateCheckout({ trackingName, checkoutUrl } = {}) {
  if (typeof window === "undefined" || typeof window.fbq !== "function") {
    return;
  }

  try {
    window.fbq("track", "InitiateCheckout", {
      content_name: "Afiliada Pro",
      content_category: "Landing Page",
      cta_origin: trackingName,
      checkout_url: checkoutUrl
    });
  } catch {
    // Checkout navigation must continue even if tracking is blocked or fails.
  }
}
