/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { useRouter } from 'next/router';
import { isMobile } from 'react-device-detect';

import BookList from '../../molecules/BookList';
import { Link } from '../../atoms/Link';
import { Footer as StyledFooter, MobileNav } from './styles';

const mobileNavLinks = [
  {
    text: 'Todos os livros',
    path: '/',
    ariaLabel: 'Ver todos os livros',
    isExternal: false,
  },
  {
    text: 'Sobre',
    path: 'https://github.com/gabeleonn/biblia-interlinear',
    isExternal: true,
    ariaLabel: 'Saber sobre o projeto',
  },
];

const Footer: React.FC = () => {
  const { pathname } = useRouter();

  return (
    <StyledFooter>
      {isMobile || pathname === '/' ? (
        <MobileNav>
          <ul>
            {mobileNavLinks.map(item => (
              <li key={item.text}>
                <Link
                  text={item.text}
                  ariaLabel={item.ariaLabel}
                  link={item.path}
                  isExternal={item.isExternal}
                />
              </li>
            ))}
          </ul>
        </MobileNav>
      ) : (
        <BookList />
      )}
    </StyledFooter>
  );
};

export default Footer;
