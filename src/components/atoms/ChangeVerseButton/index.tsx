import React, { useEffect, useState } from 'react';
import Link from 'next/link';

import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from 'react-icons/md';
import { Container } from './styles';

type ChangeVerseButtonProps = {
  book: string;
  chapter: number;
  bookChapters: number;
  action: 'next' | 'previous';
};

const icons = {
  next: <MdKeyboardArrowRight size={24} />,
  previous: <MdKeyboardArrowLeft size={24} />,
};

const ChangeVerseButton: React.FC<ChangeVerseButtonProps> = ({
  chapter,
  book,
  action,
}) => {
  const [newChapter, setNewChapter] = useState(chapter);

  useEffect(() => {
    if (action === 'next') {
      setNewChapter(chapter + 1);
    } else {
      setNewChapter(chapter - 1);
    }
  }, [setNewChapter, action, chapter]);

  return (
    <Link href={`/ara/${book}/${newChapter}`}>
      <Container action={action}>{icons[action]}</Container>
    </Link>
  );
};

export default ChangeVerseButton;
