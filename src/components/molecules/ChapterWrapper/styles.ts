import styled from 'styled-components';

export const Container = styled.article`
  max-width: 760px;
  width: 100%;

  margin: auto;

  @media (max-width: 1150px) {
    max-width: 600px;
  }

  @media (max-width: 960px) {
    max-width: 600px;
  }

  @media (max-width: 800px) {
    max-width: 500px;
  }

  @media (max-width: 700px) {
    max-width: 400px;
  }

  @media (max-width: 600px) {
    max-width: 330px;
  }
`;
