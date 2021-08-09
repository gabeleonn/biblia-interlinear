import React from 'react';
import { Container } from './styles';

type ChapterTitleProps = {
  book: string;
  chapter: number;
  padding?: string;
};

const ChapterTitle: React.FC<ChapterTitleProps> = ({
  book,
  chapter,
  padding = '0',
}) => (
  <Container padding={padding}>
    {book && chapter ? <h1>{`${book} ${chapter}`}</h1> : <p>Carregando...</p>}
  </Container>
);

export default ChapterTitle;
