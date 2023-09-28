import { ReactNode } from 'react';
import { styled } from 'styled-components';

type WrapperProps = {
  children: ReactNode;
};

const Wrapper = ({ children }: WrapperProps) => {
  return <Container>{children}</Container>;
};

export default Wrapper;

const Container = styled.div`
  margin: 100px auto 50px;
  text-align: center;
`;
