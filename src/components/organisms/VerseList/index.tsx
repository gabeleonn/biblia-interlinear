import React from 'react';

import { Container, Verse } from './styles';

import { Verse as VerseType } from '../../../pages/ara/[book]/[chapter]';
import VerseNumber from '../../atoms/VerseNumber';
import VerseText from '../../molecules/VerseText';
import { generateKey } from '../../../services';

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
