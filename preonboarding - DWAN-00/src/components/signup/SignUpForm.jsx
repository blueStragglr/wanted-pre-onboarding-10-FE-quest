import React, { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import instance from "../../api/instance";

import Form from "react-bootstrap/Form";
import SignUpInput from "./SignUpInput";
import SignUpButton from "./SignUpButton";

const SignUpForm = () => {
  const [nickname, setNickName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const data = { nickname, email, password };
  const navigate = useNavigate();

  const signupFunction = (e) => {
    e.preventDefault();
    if (!nickname) {
      return alert("닉네임을 입력하세요.");
    } else if (!email) {
      return alert("Email을 입력하세요.");
    } else if (!password) {
      return alert("Password를 입력하세요.");
    } else if (password !== passwordConfirm) {
      return alert("Password가 일치하지 않습니다.");
    } else {
      instance.post("/users/signup", data).then((res) => {
        console.log(res.data);
        navigate("/login");
      });
    }
  };

  return (
    <div className="flexCenter flex-col mt-60">
      <form onSubmit={signupFunction}>
        <SignUpInput
          nickname={nickname}
          email={email}
          password={password}
          passwordConfirm={passwordConfirm}
          setEmail={setEmail}
          setNickName={setNickName}
          setPassword={setPassword}
          setPasswordConfirm={setPasswordConfirm}
        />
        <SignUpButton />
      </form>
    </div>
  );
};

export default SignUpForm;
