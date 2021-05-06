import React from 'react';

import { Container } from './styles';

import VerseWord from '../../atoms/VerseWord';
import { generateKey } from '../../../services';

import { useStrongs } from '../../../context/useStrongs';
import { Word } from '../../../context/useChapter';

type VerseTextProps = {
  words: Word[];
};

const VerseText: React.FC<VerseTextProps> = ({ words }) => {
  const { setStrongs } = useStrongs();

  return (
    <Container>
      {words &&
        words.map(word => (
          <VerseWord key={generateKey()} setStrongs={setStrongs} word={word} />
        ))}
    </Container>
  );
};

export default VerseText;
