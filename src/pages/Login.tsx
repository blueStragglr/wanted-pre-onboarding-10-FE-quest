import { useRef } from "react";

const Login = () => {
  const idRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const loginSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log({ id: idRef.current?.value, pwd: passwordRef.current?.value });
  };

  return (
    <form onSubmit={loginSubmitHandler}>
      <label>
        id:
        <input ref={idRef} />
      </label>
      <label>
        password:
        <input ref={passwordRef} />
      </label>
      <input type="submit" value="Login" />
    </form>
  );
};

export default Login;
