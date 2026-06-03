// hooks/useVisitTracking.ts
"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

export function useVisitTracking() {
    const pathname = usePathname();
    useEffect(() => {
        let sent = false;
        let timer: ReturnType<typeof setTimeout> | null = null;

        const sendVisit = () => {
            if (sent) return;

            sent = true;

            timer = setTimeout(() => {
                fetch("/api/visit", {
                    method: "POST",
                    body: JSON.stringify({
                        page: pathname
                    })
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
    }, [pathname]);
}