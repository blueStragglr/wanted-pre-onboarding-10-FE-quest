import { ChangeEvent, FormEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Container,
  InputLabel,
  ButtonGroup,
  Button,
  FormControl,
  OutlinedInput,
  Box,
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
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}
      >
        <FormControl>
          <InputLabel htmlFor="id">아이디</InputLabel>
          <OutlinedInput
            label="아이디"
            required
            autoFocus
            type="text"
            id="id"
            value={state.id}
            onChange={handleChange}
          />
        </FormControl>
        <FormControl>
          <InputLabel htmlFor="password">비밀번호</InputLabel>
          <OutlinedInput
            label="비밀번호"
            required
            type="password"
            id="password"
            value={state.password}
            onChange={handleChange}
          />
        </FormControl>
        <ButtonGroup sx={{ display: 'flex', justifyContent: 'center' }}>
          <Button type="submit">로그인</Button>
          <Button onClick={() => setState({ id: '', password: '' })}>
            초기화
          </Button>
        </ButtonGroup>
      </Box>
    </Container>
  );
};

export default Login;
