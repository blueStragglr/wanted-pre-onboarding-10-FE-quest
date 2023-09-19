import {
  Button,
  Container,
  Box,
  Avatar,
  TextField,
  Typography,
  CssBaseline,
} from "@mui/material";
import { useState } from "react";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { useNavigate } from "react-router-dom";

function Login() {
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleIdChange = (e) => {
    setUserId(e.target.value);
  };
  const handlePwChange = (e) => {
    setPassword(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`ID = ${userId}, PW = ${password}`);
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          LOGIN
        </Typography>

        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            type="text"
            id="userId"
            required
            fullWidth
            placeholder="아이디를 입력하세요."
            value={userId}
            onChange={handleIdChange}
            autoFocus
          ></TextField>
          <TextField
            margin="normal"
            type="password"
            id="password"
            required
            fullWidth
            placeholder="비밀번호를 입력하세요."
            value={password}
            onChange={handlePwChange}
          ></TextField>

          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            로그인
          </Button>
          <Button sx={{ color: "black" }} onClick={() => navigate("/")}>
            ← 뒤로 가기
          </Button>
        </Box>
      </Box>
    </Container>
  );
}

export default Login;
