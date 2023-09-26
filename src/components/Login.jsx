import React, { useState } from 'react'
import '../style/Login.css' ;
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();
    const [inputs, setInputs] = useState({
        id:'',     // 이메일 
        password:'',    // 비밀번호
    });
    const {id, password} = inputs;


    const submitHandler = (event) => {
        event.preventDefault();
        console.log('이메일:', id,  '비밀번호:', password);
    }

    const onChangeHandler = (event) => {
        const {name, value } = event.target;
        const updateInput = {
            ...inputs,
            [name] : value,
        }
        setInputs({...updateInput});
    }

    return (
        <form className='auth-form' onSubmit={submitHandler}>
            <input  name='id' value={id} onChange={onChangeHandler} placeholder='아이디'/>
            <input name='password' value={password} placeholder='비밀번호' onChange={onChangeHandler} />
            <button type='submit'> 로그인</button>
            <button onClick={() => navigate('/result')}>페이지 2로가기</button>
        </form>
    )
}

export default Login
