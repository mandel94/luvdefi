import '../styles/globals.scss'
import 'tailwindcss/tailwind.css';

import { AppProps } from 'next/app';
import React from 'react';

function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default App;