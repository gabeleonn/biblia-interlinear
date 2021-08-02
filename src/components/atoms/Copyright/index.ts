import styled from 'styled-components';
import theme from '../../../styles/theme';

export const Copyright = styled.footer`
  color: ${() => theme.colors.grey[300]};
  font-size: ${() => theme.fontSize.small};
  text-align: center;

  margin-top: 30px;

  @media (max-width: 1100px) {
    margin-bottom: 50px;
  }
`;
