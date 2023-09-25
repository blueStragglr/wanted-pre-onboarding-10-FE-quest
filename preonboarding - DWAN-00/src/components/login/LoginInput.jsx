import React from "react";
import LoginRegEmail from "./LoginRegEmail";
import LobinRegPw from "./LoginRegPw";

const LoginInput = ({
  email,
  password,
  setEmail,
  setPassword,
  isValidEmail,
  isValidPassWord,
}) => {
  return (
    <div className="">
      <div className="inputComponent flexCenter border-b mt-52">
        <input
          type="text"
          className="inputComponent flexCenter"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="이메일"
        />
        <LoginRegEmail isValidEmail={isValidEmail} />
      </div>
      <div className="inputComponent border-b flexCenter">
        <input
          type="password"
          className="inputComponent"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="비밀번호"
        />
      </div>
      <LobinRegPw isValidPassWord={isValidPassWord} />
    </div>
  );
};

export default LoginInput;
