import '../styles/globals.css';
import { Metadata } from 'next';
import { Navigation } from '../components';

export const metaData: Metadata = {
  title: 'viewport',
  description:
    'width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no, viewport-fit=cover',
};

export const metadata: Metadata = {
  title: "Jiyoung's Portfolio",
  openGraph: {
    title: "Jiyoung's Portfolio",
    description: '👉🏻 Check my Portfolio',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body>
        <Navigation />
        {children}
        <div id="portal" />
      </body>
    </html>
  );
}
