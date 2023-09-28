import React, { useState } from 'react'

const SigninForm = () => {
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");

  const handlerOnId = (e) => setId(e.target.value);
  const handlerOnPw = (e) => setPw(e.target.value);
  const handlerSubmit = (e) => {
    e.preventDefault();
    if(!id || !pw) alert("Please enter your ID or PW.");
    console.log('ID : ' + id);
    console.log('PW : ' + pw);
  }

  return (
    <article>
      <h2>Sign in</h2>
      <form id="form" onSubmit={handlerSubmit}>
        <div className="form-group">
          <label>ID</label>
          <input type="text" name="id" value={id} onChange={handlerOnId} placeholder="Enter ID" />
        </div>
        <div className="form-group">
          <label>PW</label>
          <input type="password" name="password" autoComplete="on" value={pw} onChange={handlerOnPw} placeholder="Enter Password" />
        </div>
        <button type="submit">Submit</button>
      </form>
    </article>
  )
}

export default SigninForm