import React, { useState } from "react";

const Login = () => {
  const [inputId, setInputId] = useState("");
  const [inputPw, setInputPw] = useState("");

  const onIdHandler = (event) => {
    setInputId(event.target.value);
  };

  const onPwHandler = (event) => {
    setInputPw(event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    console.log("inputId", inputId);
    console.log("inputPw", inputPw);
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          value={inputId}
          placeholder="아이디를 입력해주세요"
          required="required"
          onChange={(event) => {
            onIdHandler(event);
          }}
        />
        <input
          type="password"
          value={inputPw}
          placeholder="비밀번호를 입력해주세요"
          required="required"
          onChange={(event) => {
            onPwHandler(event);
          }}
        />
        <button type="submit">로그인</button>
      </form>
    </div>
  );
};

export default Login;
