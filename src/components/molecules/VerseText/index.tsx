import React from 'react';

import { Container } from './styles';

import { Word } from '../../../pages/ara/[book]/[chapter]';
import VerseWord from '../../atoms/VerseWord';
import { generateKey } from '../../../services';

type VerseTextProps = {
  words: Word[];
};

const VerseText: React.FC<VerseTextProps> = ({ words }) => (
  <Container>
    {words && words.map(word => <VerseWord key={generateKey()} word={word} />)}
  </Container>
);

export default VerseText;
