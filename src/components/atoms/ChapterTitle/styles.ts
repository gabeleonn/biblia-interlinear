import styled from 'styled-components';

type ContainerProps = {
  padding: string;
};

export const Container = styled.main<ContainerProps>`
  padding: ${props => props.padding};
`;
