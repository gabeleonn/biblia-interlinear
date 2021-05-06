import styled from 'styled-components';

export const Copyright = styled.footer`
  color: ${props => props.theme.colors.grey[300]};
  font-size: ${props => props.theme.fontSize.small};
  text-align: center;

  margin-top: 30px;

  @media (max-width: 1100px) {
    margin-bottom: 50px;
  }
`;
