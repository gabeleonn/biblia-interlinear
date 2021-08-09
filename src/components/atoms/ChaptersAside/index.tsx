import React from 'react';

import getBookInfo from '../../../services/books';
import { BoxTitle } from '../BoxTitle';
import ChaptersContainer from '../ChaptersContainer';

import { Container } from './styles';

type ChaptersAsideProps = {
  book: string;
  longName: string;
};

const ChaptersAside: React.FC<ChaptersAsideProps> = ({ book, longName }) => {
  const data = getBookInfo(book);
  return (
    <Container>
      <BoxTitle>Capítulos</BoxTitle>
      {book && data && (
        <ChaptersContainer
          longName={longName}
          chapters={data.chapters}
          shortName={book}
        />
      )}
    </Container>
  );
};

export default ChaptersAside;
