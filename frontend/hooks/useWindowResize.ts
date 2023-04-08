import { useEffect, useState, useCallback } from 'react';

const useWindowResize = (fn: () => void, initial = false) => {
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
