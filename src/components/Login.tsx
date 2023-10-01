"use client";

import React, { useState } from "react";
import styled from "styled-components";
import CommonInput from "@/components/common/commonInput";
import CommonButton from "@/components/common/CommonButton";
const Login = () => {
  const [form, setForm] = useState({
    id: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleClick = () => {
    console.log("아이디", form.id, "비밀번호", form.password);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      handleClick();
    }
  };

  return (
    <>
      <Wrapper>
        <H1>로그인</H1>
        <CommonInput
          name={"id"}
          value={form.id}
          label={"아이디"}
          onChange={handleChange}
          autoFocus
        />
        <CommonInput
          name={"password"}
          value={form.password}
          label={"비밀번호"}
          type="password"
          onChange={handleChange}
          onKeyDown={handleKeyDown}
        />
        <CommonButton
          onClick={handleClick}
          disabled={Object.values(form).includes("")}
        >
          로그인하기
        </CommonButton>
      </Wrapper>
    </>
  );
};

export default Login;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 50%;
  gap: 10px;

  ${(props) => props.theme.breakPoints.medium} {
    width: 90%;
  }
`;

const H1 = styled.h1``;
