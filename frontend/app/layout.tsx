import '../styles/globals.css';
import { Metadata } from 'next';
import { Navigation, ScrollButton } from '../components';

export const metaData: Metadata = {
  title: 'viewport',
  description:
    'width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no, viewport-fit=cover',
};

export const metadata: Metadata = {
  title: "Jiyoung's Portfolio",
  openGraph: {
    title: 'Jung Jiyoung',
    description: 'Frontend Developer Portfolio',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="kr">
      <body>
        <Navigation />
        <ScrollButton />
        {children}
        <div id="portal" />
      </body>
    </html>
  );
}
