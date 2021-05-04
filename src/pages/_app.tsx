import React from 'react';
import { AppProps } from 'next/dist/next-server/lib/router/router';

import GlobalStyles from '../../styles/global';
import DesktopLayout from '../layout/desktop';
import Theme from '../../styles/theme';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => (
  <Theme>
    <DesktopLayout>
      <Component {...pageProps} />
    </DesktopLayout>
    <GlobalStyles />
  </Theme>
);

export default MyApp;
