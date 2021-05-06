import styled from 'styled-components';

export const Container = styled.article`
  max-width: 700px;
  width: 100%;
  position: relative;

  margin: auto;

  @media (max-width: 1359px) {
    max-width: 650px;
  }

  @media (max-width: 1200px) {
    max-width: 550px;
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

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;

  @media (max-width: 1100px) {
    flex-direction: column;
  }

  & > aside {
    width: 30%;
    padding: 0 20px;

    @media (max-width: 1100px) {
      max-width: 550px;
      width: 100%;

      margin: auto;
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
  }
`;
