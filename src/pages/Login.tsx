import { useRef } from "react";
import { Link } from "react-router-dom";

import classes from "./Login.module.css";

export default function Login() {
  const idRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const id = idRef.current?.value;
    const password = passwordRef.current?.value;

    console.log("id: ", id, " | ", "password: ", password);
  }

  return (
    <form className={classes.form} onSubmit={onSubmit}>
      <h2>Login</h2>
      <div className={classes.inputArea}>
        <input id="id" type="text" ref={idRef} placeholder="Id" />
        <input id="password" type="password" ref={passwordRef} placeholder="Password" />
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
