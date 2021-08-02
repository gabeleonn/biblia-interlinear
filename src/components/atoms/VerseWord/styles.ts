import styled from 'styled-components';
import theme from '../../../styles/theme';

export const Container = styled.button`
  font-family: ${() => theme.fontFamily.text};
  font-size: ${() => theme.fontSize.normal};
  margin-right: 5px;

  background: transparent;
  position: relative;

  &:hover {
    background: ${() => theme.colors.grey[100]};
  }
`;
