'use client';

import { useEffect, useState, useLayoutEffect } from 'react';

type ReturnType = [boolean, (locked: boolean) => void];

const useLockBodyScroll = (initialLocked?: boolean): ReturnType => {
  const [locked, setLocked] = useState(initialLocked);

  useLayoutEffect(() => {
    if (!locked) return;

    const scrollY = window.scrollY;
    document.body.style.cssText = `overflow: hidden; position: fixed; top: -${scrollY}px;  right: 0; left: 0;`;

    return () => {
      document.body.style.cssText = '';
      window.scrollTo(0, scrollY);
    };
  }, [locked]);

  useEffect(() => {
    if (initialLocked === undefined) return;
    if (locked !== initialLocked) setLocked(initialLocked);
  }, [initialLocked, locked]);

  return [locked || false, setLocked];
};

export default useLockBodyScroll;
