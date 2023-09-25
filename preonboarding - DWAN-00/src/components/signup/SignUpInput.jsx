import { useRef, useState, useEffect } from "react";
import instance from "../../api/instance";

const SignUpInput = ({
  nickname,
  email,
  password,
  passwordConfirm,
  setEmail,
  setNickName,
  setPassword,
  setPasswordConfirm,
}) => {
  const btnRef = useRef(true);
  const [canSignupEmail, setCanSignupEmail] = useState(null);
  const [canSignupPassword, setCanSignupPassword] = useState(false);
  const [btnDisable, setBtnDisable] = useState(true);
  const emailPattern =
    /^[A-Za-z0-9]([-_.]?[A-Za-z0-9])*@[A-Za-z0-9]([-_.]?[A-Za-z0-9])*\.[A-Za-z]{3}$/;
  const passwordPattern = /^(?=.*[A-Z])(?=.*[!@#$%^&*()_+])(?=.{8,})$/;
  const isValidEmail = emailPattern.test(email);

  useEffect(() => {
    if (isValidEmail) {
      setCanSignupEmail(true);
    } else {
      setCanSignupEmail(false);
    }
  }, [email, isValidEmail]);

  useEffect(() => {
    if (canSignupEmail === true) {
      btnRef.current.disabled = false;
    } else {
      btnRef.current.disabled = true;
    }
  }, [canSignupEmail]);

  const checkDuplicateEmail = (e) => {
    e.preventDefault();
    instance.post("/users/checkemail", { email }).then((res) => {
      if (res.data.message === "해당 이메일 사용 가능") {
        setCanSignupEmail(true);
        alert("사용 가능한 이메일입니다.");
      } else {
        setCanSignupEmail(false);
        alert("중복된 이메일입니다.");
      }
    });
  };

  return (
    <div className="flexCenter">
      <div className="flexCenter">
        <input
          className="inputComponent border-b"
          type="text"
          placeholder="닉네임"
          value={nickname}
          onChange={(e) => setNickName(e.target.value)}
        />
      </div>
      <div className="flexCenter flex-row ml-[5rem]">
        <input
          className="inputComponent border-b"
          type="text"
          placeholder="이메일"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button
          className={`border-2 rounded-lg ml-2 p-2 ${
            canSignupEmail ? "bg-blue" : "border-blue"
          } ${canSignupEmail ? "text-white" : "text-blue"} ${
            !canSignupEmail ? "cursor-not-allowed" : "cursor-pointer"
          }`}
          type="button"
          onClick={checkDuplicateEmail}
          ref={btnRef}
        >
          중복 확인
        </button>
      </div>
      <div className="flexCenter flex-col">
        <input
          className="inputComponent border-b"
          type="password"
          placeholder="비밀번호"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          className="inputComponent border-b"
          type="password"
          placeholder="비밀번호 확인"
          value={passwordConfirm}
          onChange={(e) => setPasswordConfirm(e.target.value)}
        />
      </div>
    </div>
  );
};

export default SignUpInput;
