import { styled } from 'styled-components';

type ButtonProps = {
  text: string;
  onClick: () => void;
};

const Button = ({ text, onClick }: ButtonProps) => {
  return <Wrapper onClick={onClick}>{text}</Wrapper>;
};

export default Button;

const Wrapper = styled.div`
  position: fixed;
  top: 30px;
  right: 50px;
  padding: 10px;
  border: 1px solid #000;
  border-radius: 5px;
  background-color: #fff;
  cursor: pointer;
`;
