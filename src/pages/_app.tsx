import React from 'react';
import { AppProps } from 'next/dist/next-server/lib/router/router';

import GlobalStyles from '../styles/global';
import DesktopLayout from '../layout/desktop';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => (
  <>
    <DesktopLayout>
      <Component {...pageProps} />
    </DesktopLayout>
    <GlobalStyles />
  </>
);

export default MyApp;
