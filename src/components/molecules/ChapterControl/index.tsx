import React from 'react';

import { Chapter } from '../../../pages/ara/[book]/[chapter]';

import ChangeVerseButton from '../../atoms/ChangeVerseButton';

const ChapterControl: React.FC<Chapter> = ({ data }) => (
  <>
    {data && (
      <>
        {data.chapter > 1 && (
          <ChangeVerseButton
            action="previous"
            book={data.bookLink}
            bookChapters={data.chapters}
            chapter={data.chapter}
          />
        )}
        {data.chapter !== data.chapters && (
          <ChangeVerseButton
            action="next"
            book={data.bookLink}
            bookChapters={data.chapters}
            chapter={data.chapter}
          />
        )}
      </>
    )}
  </>
);

export default ChapterControl;
