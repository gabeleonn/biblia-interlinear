/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Link from 'next/link';

import { getBooks } from '../../../services/books';
import { Container } from './styles';

const BookList: React.FC = () => {
  const books = getBooks();

  return (
    <Container>
      {books &&
        books.map(book => (
          <Link href={`/ara/${book.shortName}`} key={book.order}>
            <a>{book.longName}</a>
          </Link>
        ))}
    </Container>
  );
};

export default BookList;
