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

  > input:first-child {
    margin-bottom: 5px;
  }

  > input:last-child {
    margin-bottom: 10px;
  }
`;
