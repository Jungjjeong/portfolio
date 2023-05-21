'use client';

import { useEffect, useState } from 'react';

const ThemeButton = () => {
  const [isDark, setIsDark] = useState<boolean>(false);

  useEffect(() => {
    const htmlDom = document.querySelector('html');

    if (htmlDom?.classList.contains('dark')) {
      setIsDark(true);
    }
  }, []);

  useEffect(() => {
    const htmlDom = document.querySelector('html');

    if (isDark) {
      htmlDom?.classList.add('dark');
      return;
    }

    htmlDom?.classList.remove('dark');
  }, [isDark]);

  const handleChange = () => {
    setIsDark((prev) => !prev);
  };

  return (
    <>
      <label className="flex cursor-pointer select-none items-center">
        <div className="relative z-20">
          <input
            type="checkbox"
            checked={isDark}
            onChange={handleChange}
            className="sr-only"
          />
          <div
            className={`box block h-8 w-14 rounded-full ${
              isDark ? 'bg-black/70' : 'bg-gray/70'
            }`}
          />
          <div
            className={`absolute left-1 top-1 flex h-6 w-6 items-center justify-center rounded-full bg-white transition text-4xl ${
              isDark ? 'translate-x-full' : ''
            }`}
          >
            {isDark ? '🌚' : '🌝'}
          </div>
        </div>
      </label>
    </>
  );
};

export default ThemeButton;
