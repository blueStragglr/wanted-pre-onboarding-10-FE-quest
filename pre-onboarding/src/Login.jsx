import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

export default function Login() {
  // 상태 초기화
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setCredentials((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // 폼 제출을 방지합니다.
    console.log(credentials);
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      minHeight="100vh"
      width="100%"
    >
      <form noValidate autoComplete="off" onSubmit={handleSubmit}>
        <Box marginBottom={2}>
          <TextField
            name="username"
            label="Username"
            variant="outlined"
            fullWidth
            required
            onChange={handleChange}
            value={credentials.username}
          />
        </Box>
        <Box marginBottom={2}>
          <TextField
            name="password"
            label="Password"
            type="password"
            variant="outlined"
            fullWidth
            required
            onChange={handleChange}
            value={credentials.password}
          />
        </Box>
        <Button variant="contained" color="primary" type="submit" fullWidth>
          Login
        </Button>
      </form>
    </Box>
  );
}
