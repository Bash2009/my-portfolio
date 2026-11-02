import { useEffect, useRef } from "react";
import { animate, stagger, utils } from "animejs";
import type { JSAnimation } from "animejs";
import { EASE_GLASS, prefersReduced, riseIn } from "../lib/motion";

/**
 * Reveals an element once via IntersectionObserver using anime.
 * Children marked [data-reveal] stagger in; otherwise the root animates.
 * Never uses scroll listeners. Cleans up animations on unmount.
 */
const useReveal = <T extends HTMLElement>(deps: unknown[] = []) => {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const showStatic = () => {
      const targets = [...el.querySelectorAll<HTMLElement>("[data-reveal]")];
      utils.set(targets.length ? targets : el, {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
      });
    };

    if (prefersReduced() || typeof IntersectionObserver === "undefined") {
      showStatic();
      return;
    }

    const anims: JSAnimation[] = [];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          observer.unobserve(entry.target);

          const children = [...el.querySelectorAll<HTMLElement>("[data-reveal]")];
          if (children.length) {
            utils.set(el, { opacity: 1, y: 0, filter: "blur(0px)" });
            anims.push(
              animate(children, {
                ...riseIn,
                delay: stagger(80),
                ease: EASE_GLASS,
              }),
            );
          } else {
            anims.push(
              animate(el, { ...riseIn, ease: EASE_GLASS }),
            );
          }
        });
      },
      { threshold: 0.05, rootMargin: "0px 0px -8% 0px" },
    );

    observer.observe(el);
    return () => {
      observer.disconnect();
      anims.forEach((a) => a.revert());
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);

  return ref;
};

export default useReveal;
