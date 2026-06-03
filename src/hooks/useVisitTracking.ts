// hooks/useVisitTracking.ts
"use client";

import { useEffect } from "react";

export function useVisitTracking() {
    useEffect(() => {
        let sent = false;
        let timer: ReturnType<typeof setTimeout> | null = null;

        const sendVisit = () => {
            if (sent) return;

            sent = true;

            timer = setTimeout(() => {
                fetch("/api/visit", {
                    method: "POST",
                });
            }, 5000);
        };

        window.addEventListener("mousemove", sendVisit, { once: true });
        window.addEventListener("touchstart", sendVisit, { once: true });
        window.addEventListener("scroll", sendVisit, { once: true });

        return () => {
            if (timer) clearTimeout(timer);

            window.removeEventListener("mousemove", sendVisit);
            window.removeEventListener("touchstart", sendVisit);
            window.removeEventListener("scroll", sendVisit);
        };
    }, []);
}