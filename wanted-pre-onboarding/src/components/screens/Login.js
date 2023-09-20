import React, { useState } from "react";
import { Route } from "react-router-dom";
import styled from "styled-components";
import { useNavigate } from "react-router";

const Title = styled.h2`
  text-align: center;
`;

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 300px;
  margin: 0 auto;
`;

const InputField = styled.input`
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const SubmitButton = styled.button`
  background-color: #007bff;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

export default function Login() {
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const checkValid = () => {
    if (userId.trim().length === 0 || password.length === 0) {
      return false;
    }
    return true;
  };
  const onSubmit = (event) => {
    event.preventDefault();

    const isValid = checkValid();

    if (isValid) {
      console.log(`아이디 : ${userId}, 비밀번호 : ${password}`);
      setUserId("");
      setPassword("");
      navigate("/");
    }
  };

  const handleUserId = (event) => {
    setUserId(event.target.value);
  };

  const handlePassword = (event) => {
    setPassword(event.target.value);
  };

  return (
    <div>
      <FormContainer onSubmit={onSubmit}>
        <Title>로그인</Title>

        <InputField
          type="text"
          value={userId}
          id="userId"
          name="userId"
          placeholder="아이디를 입력하세요"
          onChange={handleUserId}
        />

        <InputField
          type="password"
          value={password}
          id="password"
          name="password"
          placeholder="패스워드를 입력하세요"
          onChange={handlePassword}
        />

        <SubmitButton type="submit">로그인</SubmitButton>
      </FormContainer>
    </div>
  );
}
