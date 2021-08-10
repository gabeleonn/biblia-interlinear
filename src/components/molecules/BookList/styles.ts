import styled from 'styled-components';

export const FooterWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;

  padding: 30px;
  height: 500px;
  flex-direction: row;

  @media (max-width: 768px) {
    height: fit-content;
    flex-direction: column;
  }
`;

export const FooterSection = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;

  max-height: calc(500px - 30px);
  height: 100%;

  &:nth-child(1),
  &:nth-child(2) {
    width: 15%;

    @media (max-width: 768px) {
      width: 100%;
    }
  }

  &:nth-child(3) {
    width: 30%;

    @media (max-width: 768px) {
      width: 100%;
    }
  }

  &:nth-child(4) {
    width: 45%;

    @media (max-width: 768px) {
      width: 100%;
    }
  }

  @media (max-width: 768px) {
    width: 100%;
    margin-left: 40px;
    flex-wrap: nowrap;
    max-height: fit-content;

    &:not(:last-child) {
      margin-bottom: 20px;
    }
  }
`;

export const FooterSectionTitle = styled.h3`
  font-weight: bold;
  font-size: 24px;

  margin-bottom: 20px;
`;
