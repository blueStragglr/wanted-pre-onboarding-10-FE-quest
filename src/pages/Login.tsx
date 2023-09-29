import { ChangeEvent, FormEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Container,
  InputLabel,
  Input,
  ButtonGroup,
  Button,
} from '@mui/material';

const Login = () => {
  const [state, setState] = useState({
    id: '',
    password: '',
  });
  const navigate = useNavigate();

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(`아이디: ${state.id}`, `비밀번호: ${state.password}`);
    setState({ id: '', password: '' });
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { id, value } = event.currentTarget;

    setState((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleClick = () => {
    setState({ id: '', password: '' });
  };

  return (
    <Container
      sx={{
        border: '1px gray solid',
        borderRadius: 3,
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
      }}
      maxWidth="xs"
    >
      <ButtonGroup sx={{ position: 'absolute', right: 10, top: 10 }}>
        <Button onClick={() => navigate('/info')}>Info 페이지 이동</Button>
      </ButtonGroup>
      <form onSubmit={handleSubmit}>
        <InputLabel htmlFor="id">아이디</InputLabel>
        <Input type="text" id="id" value={state.id} onChange={handleChange} />
        <InputLabel sx={{ mt: 3 }} htmlFor="password">
          비밀번호
        </InputLabel>
        <Input
          type="password"
          id="password"
          value={state.password}
          onChange={handleChange}
        />
        <ButtonGroup sx={{ display: 'flex', mt: 3, justifyContent: 'center' }}>
          <Button type="submit">로그인</Button>
          <Button onClick={handleClick}>초기화</Button>
        </ButtonGroup>
      </form>
    </Container>
  );
};

export default Login;
