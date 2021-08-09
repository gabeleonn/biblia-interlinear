import styled from 'styled-components';
import theme from '../../../styles/theme';

export const Container = styled.header`
  width: 100%;
  height: 80px;

  background: ${() => theme.colors.grey[900]};
  color: ${() => theme.colors.grey[50]};
`;
