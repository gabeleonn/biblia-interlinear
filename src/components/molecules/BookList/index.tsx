/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

import {
  getBooksWithSections,
  handleSectionTitle,
} from '../../../services/books';
import { Link } from '../../atoms/Link';

import { Container, FooterSection, FooterSectionTitle } from './styles';

const BookList: React.FC = () => {
  const books = getBooksWithSections();

  return (
    <Container>
      {books.map((section, idx) => (
        <FooterSection key={`cp-${idx}`}>
          <FooterSectionTitle>{handleSectionTitle(idx)}</FooterSectionTitle>
          {section &&
            section.map(book => (
              <Link
                key={book.order}
                link={book.shortName}
                order={book.order}
                text={book.longName}
              />
            ))}
        </FooterSection>
      ))}
    </Container>
  );
};

export default BookList;
