import { useEffect, useRef } from "react";

const useDebounce = (callback, delay) => {
  const timeouIdRef = useRef(null);

  useEffect(() => {
    return () => {
      if (timeouIdRef.current) {
        clearTimeout(timeouIdRef.current);
      }
    };
  }, []);

  const debounceCallback = (...args) => {
    if (timeouIdRef.current) clearTimeout(timeouIdRef.current);

    timeouIdRef.current = setTimeout(() => {
      callback(...args);
    }, delay);
  };
  return debounceCallback;
};

export default useDebounce;
