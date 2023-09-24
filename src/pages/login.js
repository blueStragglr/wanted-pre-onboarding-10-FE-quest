import React, { useState } from "react";
import styled from "styled-components";

// mui
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";

const Login = () => {
  // ID 관련
  const [ID, setID] = useState("");
  const handleIDInput = (e) => {
    setID(e.target.value);
  };

  //PWD 관련
  const [PWD, setPWD] = useState("");
  const handlePWDInput = (e) => {
    setPWD(e.target.value);
  };

  //   로그인 관련
  const handleLoginSubmit = (e) => {
    e.preventDefault();
    console.log("login 시도");
    console.log("ID : ", ID);
    console.log("PWd : ", PWD);
  };
  return (
    <Container>
      <PageLayout>
        <StyledPaper>
          <h1>10월 원티드 프리온보딩 프론트엔드 사전과제</h1>
          <form onSubmit={handleLoginSubmit}>
            <Div>
              <StyledInput type="text" placeholder="아이디를 입력하세요" onInput={handleIDInput} required />
            </Div>
            <Div>
              <StyledInput type="password" placeholder="비밀번호를 입력하세요" onInput={handlePWDInput} required />
            </Div>
            <LoginBtn>로그인</LoginBtn>
          </form>
        </StyledPaper>
      </PageLayout>
    </Container>
  );
};

const PageLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const StyledPaper = styled(Paper)`
  width: 700px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Div = styled.div`
  width: 300px;
  display: flex;
  justify-content: center;
  margin-bottom: 15px;
`;

const StyledInput = styled.input`
  width: 100%;
  height: 35px;
`;

const LoginBtn = styled.button`
  width: 100%;
  height: 30px;
  border: none;
  border-radius: 12px;
  color: white;
  background-color: #2658f6;
  outline: 0;
`;

export default Login;
