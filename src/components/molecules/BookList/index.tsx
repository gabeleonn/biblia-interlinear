/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { isMobile } from 'react-device-detect';

import {
  getBooksWithSections,
  handleSectionTitle,
} from '../../../services/books';
import { Link } from '../../atoms/Link';

import { Container, FooterSection, FooterSectionTitle } from './styles';

const BookList: React.FC = () => {
  const books = getBooksWithSections();

  return (
    <Container isMobile={isMobile}>
      {books.map((section, idx) => (
        <FooterSection key={`cp-${idx}`} isMobile={isMobile}>
          <FooterSectionTitle>{handleSectionTitle(idx)}</FooterSectionTitle>
          {section &&
            section.map(book => (
              <Link
                key={book.order}
                link={`/ara/${book.shortName}`}
                ariaLabel={`Acessar livro ${book.longName}`}
                text={book.longName}
              />
            ))}
        </FooterSection>
      ))}
    </Container>
  );
};

export default BookList;
