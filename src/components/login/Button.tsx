import { styled } from 'styled-components';

type ButtonProps = {
  onClick: () => void;
};

const Button = ({ onClick }: ButtonProps) => {
  return <Btn onClick={onClick}>클릭 시 콘솔 창에 아이디 / 비밀번호 출력</Btn>;
};

export default Button;

const Btn = styled.button`
  width: 100%;
  padding: 15px 20px;
  border-radius: 5px;
  font-size: 17px;
  color: #fff;
  background-color: #8aa9c890;
  transition: background-color 0.3s;

  &:hover {
    background-color: #8aa9c8;
  }
`;
