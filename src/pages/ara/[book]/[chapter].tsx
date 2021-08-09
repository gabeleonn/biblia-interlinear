/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React, { useEffect } from 'react';
import { GetStaticPaths, GetStaticPropsResult, NextPageContext } from 'next';
import { useRouter } from 'next/router';

import { useChapter } from '../../../context/useChapter';
import ChapterWrapper from '../../../components/organisms/ChapterWrapper';
import { IChapterPage } from '../../../utils/interfaces';

const ChapterPage: React.FC = () => {
  const router = useRouter();
  const [book, chapter] = router.asPath.replace('/ara/', '').split('/');
  const { data, getData } = useChapter();

  useEffect(() => {
    if (book !== '[book]' && chapter !== '[chapter]') {
      getData(book, chapter);
    }
  }, [book, chapter, getData]);

  return (
    <>
      <ChapterWrapper data={{ ...data, shortName: book }} />
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const books = await (
    await fetch('https://biblia-interlinear.herokuapp.com/paths')
  ).json();

  const paths = [];

  books.forEach(element => {
    paths.push({ params: element });
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async context => {
  const { book, chapter } = context.params;

  const raw = await fetch(
    `https://biblia-interlinear.herokuapp.com/ara/${book}/${chapter}`,
  );

  const data = await raw.json();

  return {
    props: {
      data,
    },
    revalidate: 60 * 60,
  };
};

export default ChapterPage;
