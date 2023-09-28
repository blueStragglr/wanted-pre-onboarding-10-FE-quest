import { useState } from 'react';
import Button from '../components/login/Button';
import InputBox from '../components/login/InputBox';
import InputWrapper from '../components/login/InputWrapper';
import Wrapper from '../components/common/Wrapper';

const Login = () => {
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');

  const onChangeId = (e: React.ChangeEvent<HTMLInputElement>) => {
    setId(e.target.value);
  };
  const onChangePw = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPw(e.target.value);
  };

  const onClick = () => {
    console.log(`아이디: ${id} / 비밀번호: ${pw}`);
  };

  return (
    <Wrapper>
      <InputWrapper>
        <InputBox type="text" value={id} onChange={onChangeId} placeholder="아이디" />
        <InputBox
          type="password"
          value={pw}
          onChange={onChangePw}
          placeholder="비밀번호"
        />
        <Button onClick={onClick} />
      </InputWrapper>
    </Wrapper>
  );
};

export default Login;
