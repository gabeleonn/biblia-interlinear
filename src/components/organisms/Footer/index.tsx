import React from 'react';

import BookList from '../../molecules/BookList';
import { Footer as StyledFooter } from './styles';

const Footer: React.FC = () => (
  <StyledFooter>
    <BookList />
  </StyledFooter>
);

export default Footer;
