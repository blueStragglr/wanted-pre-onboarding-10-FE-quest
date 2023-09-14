import React, { useState } from 'react';

function LoginPage() {
    const [id, setId] = useState('');
    const [pwd, setPwd] = useState('');
  
    const idTextOnChange = (e) => {
      setId(e.target.value);
    };
  
    const pwdTextOnChange = (e) => {
      setPwd(e.target.value);
    };
  
    const loginBtnClick = () => {
        console.log('ID:', id, ', PWD:', pwd);
    };
  
    return (
      <div>
        아이디 : <input type='text' value={id} onChange={idTextOnChange}/>
        <br/>비밀번호 : <input type='text' value={pwd} onChange={pwdTextOnChange}/>
        <br/><button onClick={loginBtnClick}>로그인</button>
      </div>
    );
}

export default LoginPage
