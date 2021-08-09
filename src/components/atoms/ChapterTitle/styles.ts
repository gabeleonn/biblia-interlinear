import styled from 'styled-components';

type ContainerProps = {
  padding: string;
};

export const Container = styled.div<ContainerProps>`
  padding: ${props => props.padding};
`;
