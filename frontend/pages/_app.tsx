import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Navigation from '../components/Navigation';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Navigation />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
