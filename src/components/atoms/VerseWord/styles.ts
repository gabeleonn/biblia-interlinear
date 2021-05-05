import styled from 'styled-components';

export const Container = styled.button`
  font-family: ${props => props.theme.fontFamily.text};
  font-size: ${props => props.theme.fontSize.big};
  margin-right: 5px;

  background: transparent;
  position: relative;

  &:hover {
    background: ${props => props.theme.colors.grey[100]};
  }
`;
