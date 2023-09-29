import React, { useState } from "react";

import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

const Login = () => {
  const [loginID, setLoginID] = useState<string>("");
  const [loginPW, setLoginPW] = useState<string>("");

  const handleChangeID = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLoginID(e.target.value);
  };

  const handleChangePW = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLoginPW(e.target.value);
  };

  const handleClickBtn = () => {
    console.log("ID: ", loginID, ", PW: ", loginPW);
  };

  return (
    <>
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
          <Box component="form" noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              label="ID"
              autoFocus
              onChange={handleChangeID}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              label="PW"
              type="password"
              onChange={handleChangePW}
            />
            <Button
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={handleClickBtn}
            >
              출력
            </Button>
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default Login;
