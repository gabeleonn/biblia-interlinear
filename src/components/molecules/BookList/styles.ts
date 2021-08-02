import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;

  padding: 40px;
  height: 500px;
`;

export const FooterSection = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;

  max-height: calc(500px - 40px);
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
`;

export const FooterSectionTitle = styled.h3`
  font-weight: bold;
  font-size: 24px;

  margin-bottom: 20px;
`;
