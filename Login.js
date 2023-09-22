import React, {useState} from 'react'
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const BoxCenter = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100%;
`
const FormStyle = styled.form`
  display: flex;
  flex-direction: column;
`

const Login = () => {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('')

  const navigate = useNavigate();

  const onIdHandler = (e) => {
    setId(e.target.value);
  }

  const passwordHandler = (e) => {
    setPassword(e.target.value);
  }

  const onSubmitHandler = (e) => {
    e.preventDefault();

    console.log('ID', id);
    console.log('PASSWORD', password);

    if(id === 'qortmdcks' && password === '1234'){
      navigate('./data')
    } else{
      alert('로그인 실패')
    }
  }

  return (
    <BoxCenter>
        <FormStyle onSubmit={onSubmitHandler}>
            <label>ID</label>
            <input type='text' placeholder='아이디를 입력해주세요.' value={id} onChange={onIdHandler}/>
            <label>Password</label>
            <input type='password'placeholder='비번을 입력해주세요.' value={password} onChange={passwordHandler}/>
            <br />
            <button>login</button>
        </FormStyle>
    </BoxCenter>
  )
}

export default Login