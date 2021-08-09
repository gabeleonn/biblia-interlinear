import React from 'react';

import { Container, Verse } from './styles';

import VerseNumber from '../../atoms/VerseNumber';
import VerseText from '../../molecules/VerseText';
import { generateKey } from '../../../services';
import { Chapter } from '../../../context/useChapter';
import ChapterControl from '../../molecules/ChapterControl';

const VerseList: React.FC<Chapter> = ({ data }) => (
  <Container>
    <ChapterControl data={data} />
    {data.verses &&
      data.verses.map(verse => (
        <Verse key={generateKey()}>
          <VerseNumber>{verse.verse}</VerseNumber>
          <VerseText words={verse.text} />
        </Verse>
      ))}
  </Container>
);

export default VerseList;
