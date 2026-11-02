import { useEffect, useRef } from "react";
import type { RefObject } from "react";
import { animate } from "animejs";
import { EASE_GLASS, EASE_SPRING, prefersReduced } from "../lib/motion";

/**
 * Magnetic pull on a wrapper element. anime drives translate only.
 * Disabled on touch devices and reduced motion.
 */
const useMagnetic = <T extends HTMLElement = HTMLElement>(
  strength = 0.3,
): RefObject<T | null> => {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (prefersReduced() || window.matchMedia("(pointer: coarse)").matches) return;

    let frame = 0;
    let anim: ReturnType<typeof animate> | null = null;
    const onMove = (e: MouseEvent) => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const r = el.getBoundingClientRect();
        const dx = (e.clientX - (r.left + r.width / 2)) * strength;
        const dy = (e.clientY - (r.top + r.height / 2)) * strength;
        anim = animate(el, {
          x: dx,
          y: dy,
          duration: 500,
          ease: EASE_GLASS,
        });
      });
    };

    const onLeave = () => {
      cancelAnimationFrame(frame);
      anim = animate(el, {
        x: 0,
        y: 0,
        duration: 650,
        ease: EASE_SPRING,
      });
    };

    el.addEventListener("mousemove", onMove);
    el.addEventListener("mouseleave", onLeave);
    return () => {
      cancelAnimationFrame(frame);
      el.removeEventListener("mousemove", onMove);
      el.removeEventListener("mouseleave", onLeave);
      anim?.revert();
    };
  }, [strength]);

  return ref;
};

export default useMagnetic;
