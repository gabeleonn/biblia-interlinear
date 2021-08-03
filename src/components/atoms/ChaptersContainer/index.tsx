/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

import { Link } from '../Link';

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
        <Link
          key={chapter}
          link={`${shortName}/${chapter}`}
          order={chapter}
          text={chapter}
        />
      ))}
  </Container>
);

export default ChaptersContainer;
