import React from 'react';

import Head from 'next/head';
import ChapterTitle from '../../atoms/ChapterTitle';
import { Copyright } from '../../atoms/Copyright';
import { ChapterWrapperArticle, Wrapper } from './styles';

import VerseList from '../VerseList';
import StrongAside from '../../atoms/StrongAside';
import ChaptersAside from '../../atoms/ChaptersAside';
import { Chapter } from '../../../context/useChapter';
import ChapterControl from '../../molecules/ChapterControl';

const ChapterWrapper: React.FC<Chapter> = ({ data }) => (
  <Wrapper>
    <ChapterWrapperArticle>
      {data && (
        <>
          <Head>
            <title>{`${data.book} ${data.chapter} - Bíblia Online`}</title>
          </Head>
          <ChapterControl data={data} />
          <ChapterTitle
            book={data.book}
            chapter={data.chapter}
            padding="0 0 20px 0"
          />
          <VerseList data={data} />

          <Copyright>{data.copyright}</Copyright>
        </>
      )}
    </ChapterWrapperArticle>
    <aside>
      <StrongAside />
      <ChaptersAside book={data.shortName} longName={data.book} />
    </aside>
  </Wrapper>
);

export default ChapterWrapper;
