import React, { useEffect } from 'react';
import { useRouter } from 'next/router';

import { useChapter } from '../../../context/useChapter';
import ChapterWrapper from '../../../components/organisms/ChapterWrapper';

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

export default ChapterPage;
