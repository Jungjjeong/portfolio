import '../styles/globals.css';
import { Metadata } from 'next';
import { Navigation } from '../components';

export const metaData: Metadata = {
  title: 'viewport',
  description:
    'width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no, viewport-fit=cover',
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
      </body>
    </html>
  );
}
