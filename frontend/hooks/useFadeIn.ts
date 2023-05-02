'use client';

import { useRef, useEffect } from 'react';

const useFadeIn = (duration: number, delay: number) => {
  const currentDom = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!currentDom.current) {
      return;
    }

    const { current } = currentDom;

    current.style.transition = `all ${duration}ms linear ${delay}ms`;
    current.style.opacity = '1';
  }, [delay, duration]);

  return {
    ref: currentDom,
    style: { opacity: 0 },
  };
};

export default useFadeIn;
