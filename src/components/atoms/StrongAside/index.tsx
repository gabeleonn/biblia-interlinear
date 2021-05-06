import React from 'react';
import { useStrongs } from '../../../context/useStrongs';
import { generateKey } from '../../../services';
import { BoxTitle } from '../BoxTitle';

import { Container } from './styles';

const StrongAside: React.FC = () => {
  const { strongs } = useStrongs();
  return (
    <Container>
      <BoxTitle>Strong</BoxTitle>
      {strongs ? (
        strongs.map(strong => <p key={generateKey()}>{strong} </p>)
      ) : (
        <p>Nenhuma palavra selecionada</p>
      )}
    </Container>
  );
};

export default StrongAside;
