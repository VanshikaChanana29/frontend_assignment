import '../app/globals.css';

import { AppProps } from 'next/app';
import { NextPage } from 'next';

function MyApp({ Component, pageProps }: AppProps & { Component: NextPage }) {
  return (
    <Component {...pageProps} />
  );
}

export default MyApp;