import { useEffect, useRef, type ReactNode } from "react";
import { useLocation, useNavigationType } from "react-router-dom";
import Lenis from "lenis";

interface SmoothScrollProps {
    children: ReactNode;
}

/**
 * SmoothScroll component using Lenis for premium momentum-based scrolling.
 * It wraps the application content, initializes the Lenis engine, and handles
 * scroll restoration and hash section navigation.
 */
export default function SmoothScroll({ children }: SmoothScrollProps) {
    const location = useLocation();
    const navType = useNavigationType();
    const lenisRef = useRef<Lenis | null>(null);
    const prevPathnameRef = useRef<string>(location.pathname);

    // Cache scroll position by history key (or pathname if key is not present)
    const scrollPositionsRef = useRef<Record<string, number>>({});
    const prevKeyRef = useRef<string>(location.key || location.pathname);

    useEffect(() => {
        // Initialize Lenis with custom options
        const lenis = new Lenis({
            duration: 1.2,
            easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            smoothWheel: true,
            wheelMultiplier: 1,
            touchMultiplier: 2,
            infinite: false,
        });

        lenisRef.current = lenis;

        function raf(time: number) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);

        return () => {
            lenis.destroy();
            lenisRef.current = null;
        };
    }, []);

    useEffect(() => {
        const lenis = lenisRef.current;
        if (!lenis) return;

        // 1. Save the scroll position of the page we are LEAVING,
        // using the key of that page before we do any scroll resets or transitions.
        const leavingKey = prevKeyRef.current;
        if (leavingKey) {
            scrollPositionsRef.current[leavingKey] = lenis.scroll;
        }

        const cacheKey = location.key || location.pathname;
        prevKeyRef.current = cacheKey;

        // On browser back/forward navigation (POP), restore the exact scroll position
        if (navType === "POP") {
            const savedPosition = scrollPositionsRef.current[cacheKey] || 0;

            let attempts = 0;
            const tryScroll = () => {
                const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
                // If page has rendered enough height to accommodate the scroll position,
                // or if we reached the max attempts (approx. 330ms at 60fps), perform the scroll.
                if (maxScroll >= savedPosition || attempts >= 20) {
                    lenis.scrollTo(savedPosition, { immediate: true });
                } else {
                    attempts++;
                    requestAnimationFrame(tryScroll);
                }
            };
            requestAnimationFrame(tryScroll);

            prevPathnameRef.current = location.pathname;
            return;
        }

        if (location.hash) {
            const targetId = location.hash.slice(1);

            // If the pathname changed, snap to top instantly first, then scroll to section
            if (location.pathname !== prevPathnameRef.current) {
                lenis.scrollTo(0, { immediate: true });
            }

            // Wait briefly for the DOM of the target page to render
            setTimeout(() => {
                const element = document.getElementById(targetId);
                if (element) {
                    lenis.scrollTo(element, { duration: 1.2 });
                }
            }, 100);
        } else {
            // No hash: check if we navigated to a new page or clicked the current page link
            if (location.pathname !== prevPathnameRef.current) {
                // Pathname changed: scroll to top immediately
                lenis.scrollTo(0, { immediate: true });
            } else {
                // Same page link click: scroll to top smoothly
                lenis.scrollTo(0, { duration: 1.2 });
            }
        }

        prevPathnameRef.current = location.pathname;
    }, [location.pathname, location.hash, location.key, navType]);

    return <>{children}</>;
}
