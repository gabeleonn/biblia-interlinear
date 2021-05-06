import React from 'react';
import parse from 'html-react-parser';

import { useStrongs } from '../../../context/useStrongs';
import { BoxTitle } from '../BoxTitle';
import { Container } from './styles';

const StrongAside: React.FC = () => {
  const { info } = useStrongs();
  return (
    <Container>
      <BoxTitle>Strong</BoxTitle>
      {info ? parse(info.definition) : <p>Nenhuma palavra selecionada</p>}
    </Container>
  );
};

export default StrongAside;
