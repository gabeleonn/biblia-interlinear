import styled, { css } from 'styled-components';

interface IFooterSection {
  isMobile: boolean;
}

export const Container = styled.div<IFooterSection>`
  display: flex;
  align-items: center;
  justify-content: flex-start;

  padding: 30px;

  height: ${({ isMobile }) => (isMobile ? 'fit-content' : '500px')};
  flex-direction: ${({ isMobile }) => (isMobile ? 'column' : 'row')};
`;

export const FooterSection = styled.div<IFooterSection>`
  ${({ isMobile }) =>
    isMobile
      ? css`
          display: flex;
          flex-direction: column;
          width: 100%;
          margin-left: 40px;

          &:not(:last-child) {
            margin-bottom: 20px;
          }
        `
      : css`
          display: flex;
          flex-direction: column;
          flex-wrap: wrap;

          max-height: calc(500px - 30px);
          height: 100%;

          &:nth-child(1) {
            width: 15%;
          }

          &:nth-child(2) {
            width: 15%;
          }

          &:nth-child(3) {
            width: 30%;
          }

          &:nth-child(4) {
            width: 40%;
          }
        `}
`;

export const FooterSectionTitle = styled.h3`
  font-weight: bold;
  font-size: 24px;

  margin-bottom: 20px;
`;
