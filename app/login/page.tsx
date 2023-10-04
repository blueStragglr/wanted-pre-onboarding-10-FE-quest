"use client";
import React, { useState } from "react";

const Login = () => {
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");

  const handleSubmitLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: validate email, password
    console.log({ userEmail, userPassword });
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      <form onSubmit={(e) => handleSubmitLogin(e)}>
        <label htmlFor="userEmail">이메일</label>
        <input
          type="email"
          name="email"
          id="userEmail"
          placeholder="이메일을 입력해 주세요"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setUserEmail(e.target.value)
          }
        />
        <label htmlFor="userPassword">비밀번호</label>
        <input
          type="password"
          name="password"
          id="userPassword"
          placeholder="비밀번호를 입력해 주세요"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setUserPassword(e.target.value)
          }
        />
        <button type="submit">로그인</button>
      </form>
    </div>
  );
};

export default Login;
