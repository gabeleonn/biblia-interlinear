/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React from 'react';
import { GetStaticPaths } from 'next';
import { useRouter } from 'next/router';

import ChapterWrapper from '../../../components/organisms/ChapterWrapper';
import { IChapterPage } from '../../../utils/interfaces';

const ChapterPage: React.FC<IChapterPage> = ({ data }) => {
  const router = useRouter();
  const [book] = router.asPath.replace('/ara/', '').split('/');

  return (
    <>
      <ChapterWrapper data={{ ...data, shortName: book }} />
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const books = await (
    await fetch('https://biblia-online-api.azurewebsites.net/paths')
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
    `https://biblia-online-api.azurewebsites.net/ara/${book}/${chapter}`,
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
