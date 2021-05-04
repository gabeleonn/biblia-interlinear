import React from 'react';
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next';

const ChapterPage: React.FC = () => (
  <>
    <h1>Test</h1>
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
