import styled from 'styled-components';

export const Container = styled.sup`
  font-weight: bold;
  color: ${props => props.theme.colors.grey[300]};
  font-family: ${props => props.theme.fontFamily.text};

  margin-right: 5px;
`;
