import { styled } from 'styled-components';

type InputBoxProps = {
  type: string;
};

const InputBox = ({ type }: InputBoxProps) => {
  return <Input type={type} />;
};

export default InputBox;

const Input = styled.input`
  width: 300px;
  padding: 5px 10px;
  font-size: 18px;
`;
