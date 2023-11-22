import { useRef } from "react";
import { Link, useNavigate} from "react-router-dom";
import { login, getCurrentUserInfo } from "../api/login";

import classes from "./Login.module.css";

export default function Login() {
  const navigate = useNavigate();

  const usernameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const username = usernameRef.current?.value;
    const password = passwordRef.current?.value;

    // console.log("username: ", username, " | ", "password: ", password);

    if (username && password) {
      const loginResult = await login({username, password})
      
      if (loginResult === "fail") {
        alert("로그인에 실패했습니다.");
        return;
      }

      alert("로그인 되었습니다.");
      navigate("/menu");
    }
  }

  return (
    <form className={classes.form} onSubmit={onSubmit}>
      <h2>Login</h2>
      <div className={classes.inputArea}>
        <input id="username" type="text" ref={usernameRef} placeholder="Username" required />
        <input id="password" type="password" ref={passwordRef} placeholder="Password" required />
      </div>
      <div className={classes.buttonArea}>
        <button>Log in</button>
      </div>
      <div className={classes.bottomArea}>
        <Link to={"/"}>Home으로 돌아가기 &rarr;</Link>
      </div>
    </form>
  )
}
