import styled, { css } from 'styled-components';

import theme from '../../../styles/theme';

type ContainerProps = {
  action: string;
};

export const Container = styled.a<ContainerProps>`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 8px;
  border-radius: 100px;

  background: ${() => theme.colors.grey[900]};
  color: ${() => theme.colors.grey[50]};

  position: fixed;
  z-index: 10;
  top: 60%;
  ${props =>
    props.action === 'next'
      ? css`
          right: 35%;

          @media (max-width: 1100px) {
            right: 10%;
          }

          @media (max-width: 900px) {
            right: 3%;
          }
        `
      : css`
          left: 3.5%;

          @media (max-width: 1100px) {
            left: 10%;
          }

          @media (max-width: 900px) {
            left: 3%;
          }
        `}
`;
