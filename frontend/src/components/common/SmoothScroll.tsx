import { useEffect, type ReactNode } from "react";
import Lenis from "lenis";

interface SmoothScrollProps {
    children: ReactNode;
}

/**
 * SmoothScroll component using Lenis for premium momentum-based scrolling.
 * It wraps the application content and initializes the Lenis engine.
 */
export default function SmoothScroll({ children }: SmoothScrollProps) {
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

        function raf(time: number) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);

        return () => {
            lenis.destroy();
        };
    }, []);

    return <>{children}</>;
}
