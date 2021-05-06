import React from 'react';

import Header from '../components/organisms/Header';
import Footer from '../components/organisms/Footer';
import Main from '../components/organisms/Main';

import StrongProvider from '../context/useStrongs';
import ChapterProvider from '../context/useChapter';

const DesktopLayout: React.FC = ({ children }) => (
  <ChapterProvider>
    <StrongProvider>
      <Header />
      <Main>{children}</Main>
      <Footer />
    </StrongProvider>
  </ChapterProvider>
);

export default DesktopLayout;
