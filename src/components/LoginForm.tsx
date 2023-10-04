import React, { useState } from "react";

export const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const clickHnadler = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    console.log("Username: ", username);
    console.log("password: ", password);
  };

  return (
    <form className="login-form">
      <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="아이디" />
      <input type="text" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="비밀번호" />
      <button onClick={clickHnadler}>로그인</button>
    </form>
  );
};
