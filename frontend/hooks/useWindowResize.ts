/* eslint-disable react-hooks/rules-of-hooks */
import { useEffect, useState, useCallback } from 'react';

const useWindowResize = (fn: () => void, initial = false) => {
  if (typeof window === undefined) {
    return 0;
  }
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleFn = useCallback(() => {
    setWindowWidth(window.innerWidth);
    fn();
  }, [fn, setWindowWidth]);

  useEffect(() => {
    window.addEventListener('resize', handleFn);
    initial && handleFn();

    return () => window.removeEventListener('resize', handleFn);
  }, [handleFn, initial]);

  return windowWidth;
};

export default useWindowResize;
