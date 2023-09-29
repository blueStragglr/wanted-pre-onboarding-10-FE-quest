import React, { useState } from 'react'

const Login = () => {

    const [loginID, setLoginID] = useState<string>('');
    const [loginPW, setLoginPW] = useState<string>('');

    const handleChangeID = (e: React.ChangeEvent<HTMLInputElement>) => {
        setLoginID(e.target.value);
    }

    const handleChangePW = (e: React.ChangeEvent<HTMLInputElement>) => {
        setLoginPW(e.target.value);
    }

    const handleClickBtn = () => {
        console.log('ID: ', loginID, 'PW: ', loginPW)
    }

    return (
        <div className="login">
            <div>
                <label>아이디</label>
                <input onChange={handleChangeID} />
            </div>
            <div>
                <label>비밀번호</label>
                <input type='password' onChange={handleChangePW} />
            </div>
            <button onClick={handleClickBtn}>출력</button>
        </div>
    )
}

export default Login