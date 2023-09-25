import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { loginUser } from "../../store/userSlice.js";
import LoginInput from "./LoginInput";
import LoginButton from "./LoginButton";
import LoginToSignup from "./LoginToSignup.jsx";
import instance from "../../api/instance";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLogin, setIsLogin] = useState(false);
  const data = { email, password };
  const navigate = useNavigate();
  const emailPattern =
    /^[A-Za-z0-9]([-_.]?[A-Za-z0-9])*@[A-Za-z0-9]([-_.]?[A-Za-z0-9])*\.[A-Za-z]{3}$/;
  const isValidEmail = emailPattern.test(email);
  const passwordPattern = /^(?=.*[A-Z])(?=.*[!@#$%^&*()_+])(?=.{8,})$/;
  const isValidPassword = passwordPattern.test(password);
  const loginFunction = (e) => {
    e.preventDefault();
    console.log(e);
    if (!isValidEmail) {
      alert("유효하지 않은 이메일 형식입니다.");
      return;
    }

    // error
    /*if (!isValidPassword) {
      alert("비밀번호를 확인해주세요.");
      return;
    }*/

    if (!email) {
      return alert("ID를 입력하세요.");
    } else if (!password) {
      return alert("Password를 입력하세요.");
    } else {
      instance
        .post("/users/login", data, {
          responseType: "json",
          headers: { "Content-Type": "application/json" },
        })
        .then((res) => {
          let header = res.headers.authorization;
          console.log(data);
          dispatch(loginUser(res.data.user));
          navigate("/");
        });
    }
  };

  return (
    <div className="flexCenter">
      <form className="my-40" onSubmit={loginFunction}>
        <h2 className="flexCenter mb-10 text-blue font-bold text-4xl">
          로그인
        </h2>
        <LoginInput
          email={email}
          password={password}
          setEmail={setEmail}
          setPassword={setPassword}
          isValidEmail={isValidEmail}
          isValidPassword={isValidPassword}
        />
        <LoginButton />
        <LoginToSignup />
      </form>
    </div>
  );
};

export default LoginForm;
