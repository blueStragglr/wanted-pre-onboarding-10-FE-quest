import { ReactNode } from 'react';
import { styled } from 'styled-components';

type InputWrapperProps = {
  children: ReactNode;
};

const InputWrapper = ({ children }: InputWrapperProps) => {
  return <Wrapper>{children}</Wrapper>;
};

export default InputWrapper;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  max-width: 450px;
  margin: 0 auto;
  padding: 10px;

  > input:first-child {
    margin-bottom: 10px;
  }

  > input:nth-child(2) {
    margin-bottom: 30px;
  }
`;
