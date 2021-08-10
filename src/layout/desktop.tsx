import React from 'react';

import Header from '../components/organisms/Header';
import Footer from '../components/organisms/Footer';
import Main from '../components/organisms/Main';

import StrongProvider from '../context/useStrongs';

const DesktopLayout: React.FC = ({ children }) => (
  <StrongProvider>
    <Header />
    <Main>{children}</Main>
    <Footer />
  </StrongProvider>
);

export default DesktopLayout;
