import React from 'react';
import { useChapter } from '../../../context/useChapter';
import { BoxTitle } from '../BoxTitle';
// import { generateKey } from '../../../services';

import { Container } from './styles';

const ChaptersAside: React.FC = () => {
  const { data } = useChapter();
  return (
    <Container>
      <BoxTitle>Capítulos</BoxTitle>
      {data && <p> {data.chapters} </p>}
    </Container>
  );
};

export default ChaptersAside;
