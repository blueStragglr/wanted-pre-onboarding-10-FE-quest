import { useState } from "react";

function Login() {
  const [loginInput, setLoginInput] = useState({ id: "", password: "" });
  const handleSubmit = (e) => {
    e.preventDefault();
    if (loginInput.id === "" || loginInput.password === "") {
      alert("모두 입력해주세요!");
    }
    console.log(loginInput);
  };
  return (
    <main id="login">
      <form onSubmit={handleSubmit}>
        <label htmlFor="userId">ID</label>
        <input
          type="text"
          name=""
          id="userId"
          onChange={({ target }) =>
            setLoginInput((prev) => ({ ...prev, id: target.value }))
          }
        />
        <label htmlFor="userPassword">PASSWORD</label>
        <input
          type="password"
          name=""
          id="userPassword"
          onChange={({ target }) =>
            setLoginInput((prev) => ({ ...prev, password: target.value }))
          }
        />
        <button type="submit">로그인</button>
      </form>
    </main>
  );
}

export default Login;
