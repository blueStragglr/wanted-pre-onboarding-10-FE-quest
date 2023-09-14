import React, { useCallback, useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();
  const [id, setId] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const onChangeId = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setId(e.target.value);
  }, []);
  const onChangePassword = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setPassword(e.target.value);
    },
    []
  );
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("id:", id);
    console.log("password:", password);
    navigate("/call");
  };
  return (
    <SWrapper>
      <div className="wrapper">
        <div className="container">
          <h1>로그인</h1>
          <div className="underline"></div>
          <form onSubmit={onSubmit}>
            <h2></h2>
            <div className="container-input">
              <input
                type="text"
                placeholder="아이디를 입력해주세요."
                autoCapitalize="none"
                onChange={onChangeId}
              />
              <input
                type="password"
                placeholder="비밀번호를 입력해주세요."
                autoCapitalize="none"
                onChange={onChangePassword}
              />
            </div>
            <button type="submit">로그인</button>
          </form>
        </div>
      </div>
    </SWrapper>
  );
};

export default LoginPage;

const SWrapper = styled.div`
  margin-top: 100px;
  .wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 400px;
    margin: 0 auto;
    border-radius: 5px;

    .container {
      width: 100%;
      h1 {
        text-align: center;
        font-size: 44px;
        font-weight: 500;
        margin-bottom: 20px;
      }
      .underline {
        padding-top: 18px;
        border-top: 4px solid #000;
      }

      .container-input {
        margin-top: 30px;
        display: flex;
        flex-direction: column;
        gap: 5px;

        input {
          height: 40px;
          border: 1px solid #d4d4d4;
          border-radius: 2px;
          padding: 0 14px;
          color: #1a1a1a;
          font-size: 14px;
          font-weight: 500;
        }
      }

      button {
        width: 100%;
        margin-top: 40px;
        height: 48px;
        background-color: #1a1a1a;
        color: #fff;
        border-radius: 2px;
        border: none;
        outline: none;
        font-size: 16px;
        font-weight: 500;
        cursor: pointer;
      }
    }
  }
`;
