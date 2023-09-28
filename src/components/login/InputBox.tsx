import { styled } from 'styled-components';

type InputBoxProps = {
  type: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
};

const InputBox = ({ type, value, onChange, placeholder }: InputBoxProps) => {
  return (
    <Input
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      isEmpty={!value}
    />
  );
};

export default InputBox;

const Input = styled.input<{ isEmpty: boolean }>`
  width: 100%;
  padding: 15px 20px;
  border: 0px;
  border-radius: 5px;
  outline: 1px solid #333;
  font-size: 18px;
  transition: outline 0.3s;

  &:focus {
    outline: 1px solid #8aa9c8;
  }

  &:nth-child(2) {
    letter-spacing: ${({ isEmpty }) => (isEmpty ? '1px' : '5px')};
  }
`;
