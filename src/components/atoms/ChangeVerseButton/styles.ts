import styled, { css } from 'styled-components';

type ContainerProps = {
  action: string;
};

export const Container = styled.a<ContainerProps>`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 10px;
  border-radius: 100px;

  background: ${props => props.theme.colors.grey[900]};
  color: ${props => props.theme.colors.grey[50]};

  position: fixed;
  z-index: 10;
  top: 70%;
  ${props =>
    props.action === 'next'
      ? css`
          right: 10%;
        `
      : css`
          left: 10%;
        `}
`;
