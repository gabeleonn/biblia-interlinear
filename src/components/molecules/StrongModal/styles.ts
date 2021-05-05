import styled from 'styled-components';

type ContainerProps = {
  isOpened: boolean;
};

export const Container = styled.span<ContainerProps>`
  background: ${props => props.theme.colors.grey['500']};

  display: inline;
  position: absolute;
  top: 0;

  visibility: ${props => (props.isOpened ? 'visible' : 'hidden')};
`;
