/* eslint-disable react/display-name */
'use client';

import { useRouter } from 'next/navigation';
import { forwardRef } from 'react';

const DynamicLink = forwardRef<
  HTMLAnchorElement,
  Omit<React.HTMLProps<HTMLAnchorElement>, 'ref'>
>(({ href, children, ...props }, ref) => {
  const router = useRouter();

  return (
    <a
      {...props}
      ref={ref}
      href={href}
      onClick={(e) => {
        e.preventDefault();
        if (!href) return;
        router.push(href);
      }}
    >
      {children}
    </a>
  );
});

export default DynamicLink;
