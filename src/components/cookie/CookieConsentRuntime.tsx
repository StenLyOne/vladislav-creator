"use client";

import { useEffect } from "react";
import { TrackingScripts } from "../analytics/TrackingScripts";
import {
  ANALYTICS_CONSENT_COOKIE_NAME,
  ANALYTICS_CONSENT_GRANTED_EVENT,
  ANALYTICS_CONSENT_GRANTED_VALUE,
  ANALYTICS_CONSENT_MAX_AGE_SECONDS,
  hasAnalyticsConsentInDocument,
} from "../../core/cookies/analyticsConsent";

function setCookie(name: string, value: string) {
  if (typeof document === "undefined") return;

  const expires = new Date(
    Date.now() + ANALYTICS_CONSENT_MAX_AGE_SECONDS * 1000
  );
  const cookieParts = [
    `${name}=${encodeURIComponent(value)}`,
    `Max-Age=${ANALYTICS_CONSENT_MAX_AGE_SECONDS}`,
    `expires=${expires.toUTCString()}`,
    "path=/",
    "SameSite=Lax",
  ];

  if (window.location.protocol === "https:") {
    cookieParts.push("Secure");
  }

  document.cookie = cookieParts.join("; ");
}

function setConsentCookie() {
  if (hasAnalyticsConsentInDocument()) return;

  setCookie(ANALYTICS_CONSENT_COOKIE_NAME, ANALYTICS_CONSENT_GRANTED_VALUE);
  window.dispatchEvent(new Event(ANALYTICS_CONSENT_GRANTED_EVENT));
}

export function CookieConsentRuntime() {
  useEffect(() => {
    setConsentCookie();
  }, []);

  return <TrackingScripts />;
}
