import { styled } from 'styled-components';

type ButtonProps = {
  onClick: () => void;
};

const Button = ({ onClick }: ButtonProps) => {
  return <Btn onClick={onClick}>버튼</Btn>;
};

export default Button;

const Btn = styled.button`
  width: 300px;
`;
