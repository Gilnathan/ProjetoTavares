"use client";

import { SITE_CONFIG } from "@/config/site";
import { trackInitiateCheckout } from "@/lib/metaPixelEvents";
import styles from "./CTAButton.module.css";

export function CTAButton({ children, trackingName = "cta", className = "" }) {
  function handleClick() {
    trackInitiateCheckout({
      trackingName,
      checkoutUrl: SITE_CONFIG.checkoutUrl
    });
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
