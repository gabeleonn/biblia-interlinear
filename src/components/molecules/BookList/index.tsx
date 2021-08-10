/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

import {
  getBooksWithSections,
  handleSectionTitle,
} from '../../../services/books';
import { Link } from '../../atoms/Link';

import { FooterWrapper, FooterSection, FooterSectionTitle } from './styles';

const BookList: React.FC = () => {
  const books = getBooksWithSections();

  return (
    <FooterWrapper>
      {books.map((section, idx) => (
        <FooterSection key={`cp-${idx}`}>
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
    </FooterWrapper>
  );
};

export default BookList;
