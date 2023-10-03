import { React, useState } from "react";

export default function LoginPage() {
    const [userInfo, setUserInfo] = useState({
      id: "",
      pw: "",
    });

  const idChangeHandler = (event) => {
    setUserInfo((prevState)=>{return {...userInfo, id:event.target.value}});
  };

  const pwChangeHandler = (event) => {
    setUserInfo((prevState)=>{return {...userInfo, pw:event.target.value}});
  };

  const submitHandler = (event) => {
    event.preventDefault();
    console.log(userInfo);
  };

  return (
    <form onSubmit={submitHandler}>
      <div>
        <label>ID</label>
        <input type="text" value={userInfo.id} onChange={idChangeHandler} />
      </div>
      <div>
        <label>PW</label>
        <input type="text" value={userInfo.pw} onChange={pwChangeHandler} />
      </div>
      <div>
        <button type="submit">Button</button>
      </div>
    </form>
  );
}