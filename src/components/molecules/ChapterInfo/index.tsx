/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Link from 'next/link';

import { BooksObject } from '../../../services/books';
import { BoxTitle } from '../../atoms/BoxTitle';

import { Container } from './styles';
import ChaptersContainer from '../../atoms/ChaptersContainer';

type ChapterInfoProps = {
  book: BooksObject;
};

const ChapterInfo: React.FC<ChapterInfoProps> = ({ book }) => (
  <Container>
    {book && (
      <>
        <BoxTitle>{book.longName}</BoxTitle>
        <ChaptersContainer
          chapters={book.chapters}
          shortName={book.shortName}
        />
      </>
    )}
  </Container>
);

export default ChapterInfo;
