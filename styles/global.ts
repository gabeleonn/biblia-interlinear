import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    border: 0;
    padding: 0;
    margin: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body, input, button {
    font-family: ${props => props.theme.fontFamily.normal};
    color: ${props => props.theme.colors.grey[900]}
  }

  button {
    cursor: pointer;
  }

  a {
    cursor: pointer;
    text-decoration: none;
    color: ${props => props.theme.colors.purple[500]};

    &:hover {
      color: ${props => props.theme.colors.purple[900]};
    }
  }
`;
