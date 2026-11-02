import { cubicBezier } from "animejs";

/** Skill-mandated curves — never use anime built-in eases. */
export const EASE_GLASS = cubicBezier(0.32, 0.72, 0, 1);
export const EASE_SPRING = cubicBezier(0.34, 1.56, 0.64, 1);

export const prefersReduced = (): boolean =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/** Shared entry-tween values (transform/opacity/blur only). */
export const riseIn = {
  opacity: [0, 1] as [number, number],
  y: [64, 0] as [number, number],
  filter: ["blur(10px)", "blur(0px)"] as [string, string],
  duration: 900,
};
