import React from 'react';

import Head from 'next/head';
import ChapterTitle from '../../atoms/ChapterTitle';
import { Copyright } from '../../atoms/Copyright';
import { Container } from './styles';

import { Chapter } from '../../../pages/ara/[book]/[chapter]';
import VerseList from '../VerseList';
import ChapterControl from '../ChapterControl';

const ChapterWrapper: React.FC<Chapter> = ({ data }) => (
  <>
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
  </>
);

export default ChapterWrapper;
