import { useState } from "react";
import {
  Box,
  FormControl,
  InputLabel,
  Input,
  InputAdornment,
  IconButton,
  Button,
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { Link } from "react-router-dom";

const style = {
  display: "flex",
  flexDirection: "column",
  bgcolor: "background.paper",
  alignContent: "center",
  p: 4,
  m: 10,
  margin: "20px",
  height: "300px",
  justifyContent: "space-between",
};

function LoginForm() {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  function submitHandler() {
    console.log("제출");
    console.log("id:" + id);
    console.log("password:" + password);
  }

  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  return (
    <div className="App">
      <Link to="/">Back</Link>
      <Box style={style}>
        <h1>Login Form</h1>
        <FormControl variant="standard">
          <InputLabel htmlFor="standard-adornment-id">ID</InputLabel>
          <Input
            id="standard-adornment-id"
            endAdornment={<InputAdornment position="end"></InputAdornment>}
            onChange={(e) => setId(e.target.value)}
          />
        </FormControl>
        <FormControl variant="standard">
          <InputLabel htmlFor="standard-adornment-password">
            Password
          </InputLabel>
          <Input
            id="standard-adornment-password"
            type={showPassword ? "text" : "password"}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            onChange={(e) => setPassword(e.target.value)}
          />
        </FormControl>
        <Button variant="outlined" onClick={submitHandler}>
          로그인
        </Button>
      </Box>
    </div>
  );
}

export default LoginForm;
