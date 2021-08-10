import React from 'react';
import { Word } from '../../../utils/interfaces';

import { Container } from './styles';

type VerseWordProps = {
  word: Word;
  setStrongs(strongs: string[]): void;
};

const VerseWord: React.FC<VerseWordProps> = ({ word, setStrongs }) => (
  <>
    {word && (
      <Container onClick={() => setStrongs(word.strongs)}>
        {word.word}
      </Container>
    )}
  </>
);

export default VerseWord;
