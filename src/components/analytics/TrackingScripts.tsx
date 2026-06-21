"use client";

import Script from "next/script";
import { useEffect, useState } from "react";

const CLARITY_ID = "xaouia1dsv";

export function TrackingScripts() {
  const [loadClarity, setLoadClarity] = useState(false);

  useEffect(() => {
    let startId: number | null = null;
    let idleId: number | null = null;

    const start = () => {
      startId = window.setTimeout(() => {
        const enableClarity = () => {
          setLoadClarity(true);
        };

        if ("requestIdleCallback" in window) {
          idleId = window.requestIdleCallback(enableClarity, { timeout: 1 });
        } else {
          enableClarity();
        }
      }, 2000);
    };

    if (document.readyState === "complete") {
      start();
    } else {
      window.addEventListener("load", start, { once: true });
    }

    return () => {
      if (startId !== null) window.clearTimeout(startId);
      if (idleId !== null && "cancelIdleCallback" in window) {
        window.cancelIdleCallback(idleId);
      }

      window.removeEventListener("load", start);
    };
  }, []);

  if (!loadClarity) return null;

  return (
    <Script id="clarity-init" strategy="afterInteractive">
      {`
          (function(c,l,a,r,i,t,y){
            c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
            t=l.createElement(r); t.async=1; t.src="https://www.clarity.ms/tag/"+i;
            y=l.getElementsByTagName(r)[0]; y.parentNode.insertBefore(t,y);
          })(window, document, "clarity", "script", "${CLARITY_ID}");

          window.clarity('consentv2', {
            ad_Storage: "denied",
            analytics_Storage: "granted"
          });
        `}
    </Script>
  );
}
