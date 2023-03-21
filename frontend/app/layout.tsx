'use client';

import StyledComponentsRegistry from './lib/registry';
import '../styles/globals.css';
import { Footer, Navigation } from '../components';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body>
        <Navigation />
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
        <Footer />
      </body>
    </html>
  );
}
