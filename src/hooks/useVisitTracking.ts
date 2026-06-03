// hooks/useVisitTracking.ts
"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

export function useVisitTracking() {
    const pathname = usePathname();
    useEffect(() => {
        let sent = false;
   

        const sendVisit = () => {
            if (sent) return;

            sent = true;


            fetch("/api/visit", {
                method: "POST",
                body: JSON.stringify({
                    page: pathname
                })
            });
        };

        window.addEventListener("mousemove", sendVisit, { once: true });
        window.addEventListener("touchstart", sendVisit, { once: true });
        window.addEventListener("scroll", sendVisit, { once: true });

        return () => {
            window.removeEventListener("mousemove", sendVisit);
            window.removeEventListener("touchstart", sendVisit);
            window.removeEventListener("scroll", sendVisit);
        };
    }, [pathname]);
}