import React from 'react';

import { Container } from './styles';

import VerseWord from '../../atoms/VerseWord';
import { generateKey } from '../../../services';

import { useStrongModal } from '../../../context/useStrongsModal';
import { Word } from '../../../context/useChapter';

type VerseTextProps = {
  words: Word[];
};

const VerseText: React.FC<VerseTextProps> = ({ words }) => {
  const { toggleModal } = useStrongModal();

  return (
    <Container>
      {words &&
        words.map(word => (
          <VerseWord
            key={generateKey()}
            toggleModal={toggleModal}
            word={word}
          />
        ))}
    </Container>
  );
};

export default VerseText;
