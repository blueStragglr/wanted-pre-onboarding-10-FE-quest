import { LoginInputForm } from "../components/LoginInputForm";
import { LoginContainer, LoginInput } from "../styles/login";
import { useEffect } from "react";

export const Login = () => {
  return (
    <LoginContainer>
      <LoginInput style={{ margin: "auto" }}>
        <h2>Login</h2>
        <LoginInputForm />
      </LoginInput>
    </LoginContainer>
  );
};
