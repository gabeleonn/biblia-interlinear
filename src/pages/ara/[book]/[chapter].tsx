import React from 'react';
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next';

import ChapterWrapper from '../../../components/molecules/ChapterWrapper';

export type Word = {
  word: string;
  strongs: string[];
};

export type Verse = {
  verse: number;
  text: Word[];
};

export type Chapter = {
  data: {
    version: string;
    // eslint-disable-next-line camelcase
    short_version: string;
    copyright: string;
    book: string;
    chapter: number;
    chapters: number;
    verses: Verse[];
  };
};

const ChapterPage: React.FC<Chapter> = ({ data }) => (
  <>
    <ChapterWrapper data={data} />
  </>
);

export const getStaticProps: GetStaticProps = async (
  ctx: GetStaticPropsContext,
) => {
  const res = await fetch(
    `http://localhost:8000/ara/${ctx.params.book}/${ctx.params.chapter}`,
  );
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch('http://localhost:8000/paths');
  const posts = await res.json();

  return {
    paths: posts.map(post => ({
      params: {
        book: post.book.toString(),
        chapter: post.chapter.toString(),
      },
    })),
    fallback: true,
  };
};

export default ChapterPage;
