import { ReactNode } from 'react';
import { styled } from 'styled-components';

type WrapperProps = {
  children: ReactNode;
};

const Wrapper = ({ children }: WrapperProps) => {
  return <Conainer>{children}</Conainer>;
};

export default Wrapper;

const Conainer = styled.div`
  max-width: 960px;
  margin: 0 auto;
`;
