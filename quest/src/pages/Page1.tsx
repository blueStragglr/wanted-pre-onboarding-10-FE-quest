import React, { useState } from "react";
import styled from "styled-components";

export const Login = () => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [idValid, setIdValid] = useState(false);

  // 아이디 정규식
  const idRegEx = /^(?=.*?[A-Za-z])(?=.*?[0-9]).{6,}$/;

  // 아이디 벨리데이션
  const handleId = (e: React.ChangeEvent<HTMLInputElement>) => {
    setId(e.target.value);
    setIdValid(idRegEx.test(id));
  };

  // 비밀번호 length 확인
  const pwLength = password.length >= 5;

  // 로그인 버튼 클릭 시 아이디 패스워드 콘솔 출력 & 인풋 value 초기화
  const handleLoginBtn = () => {
    console.log(`아이디: ${id}, 패스워드: ${password}`);
    setId("");
    setPassword("");
  };

  return (
    <Container>
      <LoginForm>
        <Input
          placeholder="아이디"
          type="text"
          value={id}
          onChange={handleId}
        ></Input>
        <Input
          placeholder="비밀번호"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        ></Input>
        <LoginBtn
          type="submit"
          onClick={handleLoginBtn}
          disabled={!idValid || !pwLength}
        >
          로그인
        </LoginBtn>
      </LoginForm>
    </Container>
  );
};

const Container = styled.div`
  width: 350px;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 50%;
  transform: translate(-50%, 0);
  box-shadow: -4px 0 4px rgba(0, 0, 0, 0.1), 4px 0 4px rgba(0, 0, 0, 0.1);
  padding: 20px;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

const LoginForm = styled.form``;

const Input = styled.input`
  all: unset;
  width: 330px;
  height: 40px;
  border: 1px solid lightgray;
  border-radius: 7px;
  font-size: 14px;
  padding: 0 10px;
  margin: 5px 0;

  &:focus {
    border: 1.5px solid green;
  }
`;

const LoginBtn = styled.button`
  all: unset;
  width: 350px;
  height: 44px;
  background-color: #000;
  color: #fff;
  border-radius: 7px;
  text-align: center;
  margin: 10px 0;
  cursor: pointer;

  &:disabled {
    background-color: lightgray;
    cursor: default;
  }
`;
