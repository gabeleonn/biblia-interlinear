import React from 'react';
import toReact from 'html-react-parser';

const Home: React.FC = () => (
  <>
    {toReact(
      '<b>לחם</b><p/>lacham uma raiz primitiva ditat - 1104 1105 v 1 lutar combater guerrear 1a qal lutar combater 1b nifal entrar em batalha fazer guerra 2 qal comer usar como alimento ',
    )}
  </>
);

export default Home;
