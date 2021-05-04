import React from 'react';
import Header from '../components/organisms/Header';
import Footer from '../components/organisms/Footer';
import Main from '../components/organisms/Main';

const DesktopLayout: React.FC = ({ children }) => (
  <>
    <Header />
    <Main>{children}</Main>
    <Footer />
  </>
);

export default DesktopLayout;
