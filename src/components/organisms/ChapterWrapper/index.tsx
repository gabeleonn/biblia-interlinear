import React from 'react';

import Head from 'next/head';
import ChapterTitle from '../../atoms/ChapterTitle';
import { Copyright } from '../../atoms/Copyright';
import { Container, Wrapper } from './styles';

import VerseList from '../VerseList';
import ChapterControl from '../../molecules/ChapterControl';
import StrongAside from '../../atoms/StrongAside';
import ChaptersAside from '../../atoms/ChaptersAside';
import { Chapter } from '../../../context/useChapter';

const ChapterWrapper: React.FC<Chapter> = ({ data }) => (
  <Wrapper>
    <Container>
      {data && (
        <>
          <Head>
            <title>{`${data.book} ${data.chapter} - Bíblia Online`}</title>
          </Head>
          <ChapterTitle
            book={data.book}
            chapter={data.chapter}
            padding="0 0 20px 0"
          />
          <VerseList verses={data.verses} />
          <ChapterControl data={data} />
          <Copyright>{data.copyright}</Copyright>
        </>
      )}
    </Container>
    <aside>
      <StrongAside />
      <ChaptersAside book={data.shortName} />
    </aside>
  </Wrapper>
);

export default ChapterWrapper;
