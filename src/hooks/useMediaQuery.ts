import { useMemo, useSyncExternalStore } from "react";

const getSnapshot = (query: string) => () =>
  window.matchMedia(query).matches;

const useMediaQuery = (query: string): boolean => {
  const subscribe = useMemo(
    () => (callback: () => void) => {
      const mql = window.matchMedia(query);
      mql.addEventListener("change", callback);
      return () => mql.removeEventListener("change", callback);
    },
    [query],
  );

  return useSyncExternalStore(
    subscribe,
    getSnapshot(query),
    () => false,
  );
};

export default useMediaQuery;
