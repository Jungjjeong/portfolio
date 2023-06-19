import '../styles/globals.css';
import { Metadata } from 'next';
import { Navigation, ScrollButton } from '../components';
import Head from 'next/head';

// export const metadata: Metadata = {
//   title: 'viewport',
//   description:
//     'width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no, viewport-fit=cover',
// };

export const metadata: Metadata = {
  title: "Jiyoung's Portfolio",
  openGraph: {
    title: 'Jung Jiyoung',
    description: 'Frontend Developer Portfolio',
  },
};

// export const metadata: Metadata = {
//   title: 'google-adsense-account',
//   description: 'ca-pub-3027056364974047',
// };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="kr">
      <Head>
        <meta name="google-adsense-account" content="ca-pub-3027056364974047" />
      </Head>
      <body>
        <Navigation />
        <ScrollButton />
        {children}
        <div id="portal" />
      </body>
    </html>
  );
}
