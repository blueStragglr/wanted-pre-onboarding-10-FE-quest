import { useState } from "react";
import styled from "styled-components";
import { emailCheck, passwordCheck } from "../util/regex";

const LoginForm = () => {
  const [enteredData, setEnteredData] = useState({
    email: "",
    password: "",
  });
  const [isInputTouched, setIsInputTouched] = useState(false);

  // 유효한 조건
  const enteredFormIsValid =
    emailCheck(enteredData.email) && passwordCheck(enteredData.password);

  // 유효하지 않는 조건  -> 터치를 해서 잘못된 텍스트를 입력 받았을 때만!
  const enteredFormIsInvalid = !enteredFormIsValid && isInputTouched;
  const emailIsInValid = !emailCheck(enteredData.email) && isInputTouched;
  const pwIsInValid = !passwordCheck(enteredData.password) && isInputTouched;

  const changeHandler = (event) => {
    const { name, value } = event.target;
    setEnteredData((prev) => ({ ...prev, [name]: value }));
  };

  const blurHandler = () => {
    setIsInputTouched(true);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    if (enteredFormIsValid && !enteredFormIsInvalid) {
      console.log(
        "email :" + enteredData.email,
        "password :" + enteredData.password
      );
    }
    setEnteredData({
      email: "",
      password: "",
    });
    setIsInputTouched(false);
  };

  return (
    <FormContainer onSubmit={submitHandler}>
      <FormInfo>
        <label htmlFor="email">이메일</label>
        <input
          id="email"
          type="email"
          name="email"
          value={enteredData.email}
          onChange={changeHandler}
          onBlur={blurHandler}
          required
          autoFocus
        />
        {emailIsInValid && (
          <p style={{ color: "red", fontSize: "12px" }}>
            이메일이 올바르지 않습니다.
          </p>
        )}
      </FormInfo>
      <FormInfo>
        <label htmlFor="password">비밀번호</label>
        <input
          id="password"
          type="password"
          name="password"
          value={enteredData.password}
          onChange={changeHandler}
          onBlur={blurHandler}
          required
        />
        {pwIsInValid && (
          <p style={{ color: "red", fontSize: "12px" }}>
            비밀번호가 올바르지 않습니다.
          </p>
        )}
      </FormInfo>

      <LoginBtn type="submit">로그인하기</LoginBtn>
    </FormContainer>
  );
};

export default LoginForm;

const FormContainer = styled.form`
  height: 80%;
  margin: 30px auto;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

const FormInfo = styled.div`
  width: 60%;
  margin: 10px auto;
  display: flex;
  flex-direction: column;

  & > label {
    margin: 20px 0;
    font-size: 20px;
    font-weight: 700;
    color: var(--color-sub-400);
  }

  & > input {
    width: 100%;
    padding: 10px;
    border: none;
    border-radius: 20px;
    font-size: 18px;
  }
`;

const LoginBtn = styled.button`
  width: 60%;
  margin: 30px auto;
  padding: 10px;
  border: none;
  background-color: transparent;
  color: var(--color-sub-400);
  font-size: 20px;
  font-weight: 700;
  cursor: pointer;

  &:hover {
    transform: scale(1.09);
    font-weight: 900;
    text-decoration: underline;
  }
`;
