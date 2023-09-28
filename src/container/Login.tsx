import { useState } from 'react';
import InputBox from '../components/InputBox';
import InputWrapper from '../components/InputWrapper';
import Wrapper from '../components/Wrapper';

const Login = () => {
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');

  const onChangeId = (e: React.ChangeEvent<HTMLInputElement>) => {
    setId(e.target.value);
  };
  const onChangePw = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPw(e.target.value);
  };

  return (
    <Wrapper>
      <InputWrapper>
        <InputBox type="text" value={id} onChange={onChangeId} />
        <InputBox type="password" value={pw} onChange={onChangePw} />
      </InputWrapper>
    </Wrapper>
  );
};

export default Login;
