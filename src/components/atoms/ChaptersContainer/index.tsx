/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Link from 'next/link';

import { Container } from './styles';

type ChaptersContainerProps = {
  chapters: number[];
  shortName: string;
};

const ChaptersContainer: React.FC<ChaptersContainerProps> = ({
  chapters,
  shortName,
}) => (
  <Container>
    {chapters &&
      chapters.map(chapter => (
        <Link href={`${shortName}/${chapter}`} key={chapter}>
          <a>{chapter}</a>
        </Link>
      ))}
  </Container>
);

export default ChaptersContainer;
