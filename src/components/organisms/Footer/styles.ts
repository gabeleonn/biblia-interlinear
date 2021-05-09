import styled from 'styled-components';

export const Container = styled.main`
  width: 100%;
  height: fit-content;

  background: ${props => props.theme.colors.grey[900]};
  color: ${props => props.theme.colors.grey[50]};
`;
