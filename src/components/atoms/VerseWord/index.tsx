import React from 'react';

import { Container } from './styles';

import { Word } from '../../../pages/ara/[book]/[chapter]';

type VerseWordProps = {
  word: Word;
};

const VerseWord: React.FC<VerseWordProps> = ({ word }) => (
  <Container onClick={() => console.log(word.strongs)}>{word.word}</Container>
);

export default VerseWord;
