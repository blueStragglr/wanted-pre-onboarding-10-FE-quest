import LoginUI from "./Login.presenter";
import { useState } from "react";

export default function Login() {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  const onChangeId = (event) => {
    setId(event.target.value);
  };

  const onChangePassword = (event) => {
    setPassword(event.target.value);
  };

  const onClickLogin = () => {
    console.log(`Id: ${id} Password: ${password}`);
  };

  return (
    <LoginUI
      id={id}
      password={password}
      onChangeId={onChangeId}
      onChangePassword={onChangePassword}
      onClickLogin={onClickLogin}
    />
  );
}
