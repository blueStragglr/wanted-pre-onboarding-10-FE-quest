import { styled } from 'styled-components';

type InputBoxProps = {
  type: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const InputBox = ({ type, value, onChange }: InputBoxProps) => {
  return <Input type={type} value={value} onChange={onChange} />;
};

export default InputBox;

const Input = styled.input`
  width: 300px;
  padding: 5px 10px;
  font-size: 18px;
`;
