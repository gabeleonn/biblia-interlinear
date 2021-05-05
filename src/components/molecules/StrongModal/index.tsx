import React from 'react';
import { useStrongModal } from '../../../context/useStrongsModal';
import { generateKey } from '../../../services';

import { Container } from './styles';

type StrongModalProps = {
  strongs: string[];
};

const StrongModal: React.FC<StrongModalProps> = ({ strongs }) => {
  const { isOpened } = useStrongModal();
  return (
    <Container isOpened={isOpened}>
      {strongs && strongs.map(strong => <p key={generateKey()}>{strong} </p>)}
    </Container>
  );
};

export default StrongModal;
