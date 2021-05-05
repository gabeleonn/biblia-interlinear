import React from 'react';
import { Word } from '../../../context/useChapter';

import { Container } from './styles';

type VerseWordProps = {
  word: Word;
  toggleModal(strongs: string[]): void;
};

const VerseWord: React.FC<VerseWordProps> = ({ word, toggleModal }) => (
  <>
    <Container onClick={() => toggleModal(word.strongs)}>{word.word}</Container>
  </>
);

export default VerseWord;
