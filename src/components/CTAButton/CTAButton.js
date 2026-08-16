"use client";

import { SITE_CONFIG } from "@/config/site";
import { trackInitiateCheckout } from "@/lib/metaPixelEvents";
import styles from "./CTAButton.module.css";

export function CTAButton({ children, trackingName = "cta", className = "" }) {
  function handleClick(event) {
    trackInitiateCheckout({
      trackingName,
      checkoutUrl: SITE_CONFIG.checkoutUrl
    });

    if (
      event.defaultPrevented ||
      event.button !== 0 ||
      event.metaKey ||
      event.ctrlKey ||
      event.shiftKey ||
      event.altKey
    ) {
      return;
    }

    event.preventDefault();
    window.setTimeout(() => {
      window.location.href = SITE_CONFIG.checkoutUrl;
    }, 180);
  }

  return (
    <a
      className={`${styles.button} ${className}`.trim()}
      href={SITE_CONFIG.checkoutUrl}
      onClick={handleClick}
    >
      <span>{children}</span>
      <span aria-hidden="true" className={styles.icon}>
        &rarr;
      </span>
    </a>
  );
}
