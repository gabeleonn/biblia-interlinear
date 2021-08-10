import styled, { css } from 'styled-components';

import theme from '../../../styles/theme';

type ContainerProps = {
  action: string;
};

export const ChangeButton = styled.a<ContainerProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  position: sticky;
  width: 45px;
  height: 45px;
  z-index: 10;
  top: 60%;

  padding: 8px;
  border-radius: 100px;

  background: ${() => theme.colors.grey[900]};
  color: ${() => theme.colors.grey[50]};
  transition: all 0.2s ease-in-out;

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

  &:hover {
    background: ${() => theme.colors.purple[900]};
    color: ${() => theme.colors.grey[50]};
    transition: all 0.2s ease-in-out;
  }

  @media (max-width: 800px) {
    margin: 0 -50px 0 -50px;
    top: 90%;
  }

  @media (max-width: 700px) {
    margin: 0 -10px 0 -10px;
    top: 90%;
  }
`;
