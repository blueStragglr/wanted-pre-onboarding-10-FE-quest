import React, { useState, ChangeEvent } from 'react';
import * as S from './style';

const Login = () => {
  const [idData, setIdData] = useState<string>('');
  const [passwordData, setPasswordData] = useState<string>('');
  const changeIdData = (e: ChangeEvent<HTMLInputElement>) => {
    setIdData(e.target.value);
  };
  const changePasswordData = (e: ChangeEvent<HTMLInputElement>) => {
    setPasswordData(e.target.value);
  };
  const register = async () => {
    console.log('id : ' + idData);
    console.log('password : ' + passwordData);
  };

  return (
    <div>
      <S.LoginContainer>
        <S.InputWrap>
          <S.TitleDiv>Login</S.TitleDiv>
          <S.Input
            placeholder='id'
            className='id'
            value={idData}
            onChange={changeIdData}
          ></S.Input>
          <S.Input
            placeholder='password'
            className='password'
            type='password'
            value={passwordData}
            onChange={changePasswordData}
          ></S.Input>
        </S.InputWrap>
        <S.BtnWrap>
          <S.SubmitBtn onClick={register}>Submit</S.SubmitBtn>
        </S.BtnWrap>
      </S.LoginContainer>
    </div>
  );
};

export default Login;
