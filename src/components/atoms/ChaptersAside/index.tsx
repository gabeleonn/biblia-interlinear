import React from 'react';
import { useChapter } from '../../../context/useChapter';
import getBookInfo from '../../../services/books';
import { BoxTitle } from '../BoxTitle';
import ChaptersContainer from '../ChaptersContainer';

import { Container } from './styles';

type ChaptersAsideProps = {
  book: string;
};

const ChaptersAside: React.FC<ChaptersAsideProps> = ({ book }) => {
  const data = getBookInfo(book);
  console.log(data, book);
  return (
    <Container>
      <BoxTitle>Capítulos</BoxTitle>
      {book && data && (
        <ChaptersContainer chapters={data.chapters} shortName={book} />
      )}
    </Container>
  );
};

export default ChaptersAside;
