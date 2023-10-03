import { React, useState } from "react";

export default function LoginPage() {
  const [enteredId, setEnteredId] = useState("");
  const [enteredPw, setEnteredPw] = useState("");

  const idChangeHandler = (event) => {
    setEnteredId(event.target.value);
  };

  const pwChangeHandler = (event) => {
    setEnteredPw(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    console.log(enteredId);
    console.log(enteredPw);
  };

  return (
    <form onSubmit={submitHandler}>
      <div>
        <label>ID</label>
        <input type="text" value={enteredId} onChange={idChangeHandler} />
      </div>
      <div>
        <label>PW</label>
        <input type="text" value={enteredPw} onChange={pwChangeHandler} />
      </div>
      <div>
        <button type="submit">Button</button>
      </div>
    </form>
  );
}