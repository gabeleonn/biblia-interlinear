/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

import { Link } from '../Link';

import { AllChapters } from './styles';

type ChaptersContainerProps = {
  chapters: number[];
  shortName: string;
  longName: string;
};

const ChaptersContainer: React.FC<ChaptersContainerProps> = ({
  chapters,
  shortName,
  longName,
}) => (
  <AllChapters>
    {chapters &&
      chapters.map(chapter => (
        <Link
          key={chapter}
          link={`/ara/${shortName}/${chapter}`}
          ariaLabel={`Ir para livro ${longName} capítulo ${chapter}`}
          text={chapter}
        />
      ))}
  </AllChapters>
);

export default ChaptersContainer;
