import React from 'react';

import ChapterTitle from '../../atoms/ChapterTitle';
import { Copyright } from '../../atoms/Copyright';
import { Container } from './styles';

import { Chapter } from '../../../pages/ara/[book]/[chapter]';
import VerseList from '../VerseList';

const ChapterWrapper: React.FC<Chapter> = ({ data }) => (
  <Container>
    {data && (
      <>
        <ChapterTitle
          book={data.book}
          chapter={data.chapter}
          padding="0 0 20px 0"
        />
        <VerseList verses={data.verses} />
        <Copyright>{data.copyright}</Copyright>
      </>
    )}
  </Container>
);

export default ChapterWrapper;
