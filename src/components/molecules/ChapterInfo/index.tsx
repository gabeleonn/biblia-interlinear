/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Link from 'next/link';

import { BooksObject } from '../../../services/books';
import { BoxTitle } from '../../atoms/BoxTitle';

import { ChapterInfoContainer } from './styles';
import ChaptersContainer from '../../atoms/ChaptersContainer';

type ChapterInfoProps = {
  book: BooksObject;
};

const ChapterInfo: React.FC<ChapterInfoProps> = ({ book }) => (
  <ChapterInfoContainer>
    {book && (
      <>
        <BoxTitle>{book.longName}</BoxTitle>
        <ChaptersContainer
          longName={book.longName}
          chapters={book.chapters}
          shortName={book.shortName}
        />
      </>
    )}
  </ChapterInfoContainer>
);

export default ChapterInfo;
