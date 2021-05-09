import React from 'react';

import { Container, Verse } from './styles';

import VerseNumber from '../../atoms/VerseNumber';
import VerseText from '../../molecules/VerseText';
import { generateKey } from '../../../services';
import { Verse as VerseType } from '../../../context/useChapter';

type VerseListProps = {
  verses: VerseType[];
};

const VerseList: React.FC<VerseListProps> = ({ verses }) => (
  <Container>
    {verses &&
      verses.map(verse => (
        <Verse key={generateKey()}>
          <VerseNumber>{verse.verse}</VerseNumber>
          <VerseText words={verse.text} />
        </Verse>
      ))}
  </Container>
);

export default VerseList;