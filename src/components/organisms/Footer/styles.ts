import styled from 'styled-components';
import theme from '../../../styles/theme';

export const Footer = styled.footer`
  width: 100%;
  height: fit-content;

  background: ${theme.colors.grey[900]};
  color: ${theme.colors.grey[50]};
`;

export const MobileNav = styled.nav`
  padding: 40px 20px;
  text-align: center;

  & ul {
    list-style: none;

    & li {
      display: block;
      &:not(:last-child) {
        margin-bottom: 20px;
      }
    }
  }
`;
