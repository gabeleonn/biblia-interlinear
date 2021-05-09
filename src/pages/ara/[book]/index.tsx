import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import getBooks, { BooksObject } from '../../../services/books';
import ChapterInfo from '../../../components/molecules/ChapterInfo';

const ChapterPage: React.FC = () => {
  const [bookInfo, setBookInfo] = useState({} as BooksObject);

  const router = useRouter();
  const [book] = router.asPath.replace('/ara/', '').split('/');

  useEffect(() => {
    if (book !== '[book]') {
      setBookInfo(() => getBooks(book));
    }
  }, [book]);

  return <ChapterInfo book={bookInfo} />;
};

export default ChapterPage;
