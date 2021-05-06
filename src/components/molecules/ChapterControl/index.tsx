import React from 'react';

import ChangeVerseButton from '../../atoms/ChangeVerseButton';
import { Chapter } from '../../../context/useChapter';

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
