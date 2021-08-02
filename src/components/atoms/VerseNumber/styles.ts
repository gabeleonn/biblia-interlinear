import styled from 'styled-components';
import theme from '../../../styles/theme';

export const Container = styled.sup`
  font-weight: bold;
  color: ${() => theme.colors.grey[300]};
  font-family: ${() => theme.fontFamily.text};

  margin-right: 5px;
`;
