import { ChangeEvent, FormEvent, useState } from 'react';
import {
  Container,
  InputLabel,
  Input,
  ButtonGroup,
  Button,
} from '@mui/material';
import styled from '@emotion/styled';

const Login = () => {
  const [state, setState] = useState({
    id: '',
    password: '',
  });

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
        display: 'flex',
        width: '100vw',
        height: '100vh',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Form
        style={{
          border: '1px solid gray',
          borderRadius: '10px',
          padding: '3rem',
        }}
        onSubmit={handleSubmit}
      >
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
        <ButtonGroup sx={{ display: 'block', mt: 3 }}>
          <Button type="submit">로그인</Button>
          <Button onClick={handleClick}>초기화</Button>
        </ButtonGroup>
      </Form>
    </Container>
  );
};

export default Login;

const Form = styled.form`
  border: 1px solid gray;
  border-radius: 10px;
  padding: 3rem;
`;
