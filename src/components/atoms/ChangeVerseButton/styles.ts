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

  position: sticky;
  z-index: 10;
  top: 60%;

  width: 45px;
  height: 45px;

  ${({ action }) =>
    action === 'next'
      ? css`
          float: right;
          margin-right: -80px;
        `
      : css`
          float: left;
          margin-left: -80px;
        `};
`;
