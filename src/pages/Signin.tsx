import { useState } from 'react';
import { Button, FormControl, InputLabel, Input } from '@mui/material';
import { styled } from '@mui/material/styles';
import { usePageDispatch } from '@/contexts/PageContext';

const Signin = () => {
  const [form, setForm] = useState({
    username: '',
    password: ''
  });

  const setPage = usePageDispatch();

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(form);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <InputContainer>
        <InputLabel htmlFor="username">아이디</InputLabel>
        <Input id="username" name="username" type="text" value={form.username} onChange={handleChange} />
      </InputContainer>
      <InputContainer>
        <InputLabel htmlFor="password">비밀번호</InputLabel>
        <Input id="password" name="password" type="password" value={form.password} onChange={handleChange} />
      </InputContainer>
      <Button type="submit" variant="contained">
        로그인
      </Button>
      <Button variant="outlined" onClick={() => setPage({ type: 'SET_PAGE', payload: 'main' })}>
        2번 과제 페이지로 이동
      </Button>
    </Form>
  );
};

export default Signin;

const Form = styled('form')`
  height: fit-content;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  background: white;
  padding: 2rem;
  border-radius: 2rem;
`;

const InputContainer = styled(FormControl)`
  color: white;
`;
