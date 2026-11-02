import useMediaQuery from "./useMediaQuery";

const useReducedMotion = (): boolean =>
  useMediaQuery("(prefers-reduced-motion: reduce)");

export default useReducedMotion;
