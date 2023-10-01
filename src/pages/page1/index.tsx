import { EErrorNo } from "@Constants/errorKeyValue";
import { useInput } from "@Hooks/useInput";
import {
  Box,
  Button,
  Divider,
  FormControl,
  Stack,
  TextField,
} from "@mui/material";
import { FormEventHandler, useState } from "react";

export function Page1() {
  const [idLocal, setIdLocal] = useState("");
  const [pwdLocal, setPwdLocal] = useState("");

  const {
    value: id,
    handleChange: handleIdChange,
    setErrorNo: setIdErrorNo,
    isError: isIdError,
    errorMsg: idErrorMsg,
  } = useInput({
    defaultValue: "",
    validationFn: (value) => {
      return EErrorNo.NO_ERROR;
    },
  });

  const {
    value: pwd,
    handleChange: handlePwdChange,
    setErrorNo: setPwdErrorNo,
    isError: isPwdError,
    errorMsg: pwdErrorMsg,
  } = useInput({
    defaultValue: "",
    validationFn: (value) => {
      return EErrorNo.NO_ERROR;
    },
  });

  const handleOnSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    setIdLocal(id);
    setPwdLocal(pwd);
    if (id === "") setIdErrorNo(EErrorNo.INPUT_ERROR_EMPTY_ID);
    if (pwd === "") setPwdErrorNo(EErrorNo.INPUT_ERROR_EMPTY_PWD);
  };

  return (
    <Stack
      spacing={4}
      direction={"column"}
      width={500}
      padding={5}
      divider={<Divider orientation="horizontal" flexItem />}
    >
      <FormControl component={"form"} onSubmit={handleOnSubmit}>
        <Stack spacing={2} direction={"column"}>
          <Stack spacing={2} direction={"row"} height={100}>
            <TextField
              label="아이디"
              id="id"
              type="text"
              value={id}
              error={isIdError}
              helperText={isIdError ? idErrorMsg : ""}
              onChange={handleIdChange}
            />
            <TextField
              label="패스워드"
              id="pwd"
              type="password"
              value={pwd}
              error={isPwdError}
              helperText={isPwdError ? pwdErrorMsg : ""}
              onChange={handlePwdChange}
            />
          </Stack>
          <Stack>
            <Button variant="contained" type="submit">
              제출
            </Button>
          </Stack>
        </Stack>
      </FormControl>
      <Box>
        <Stack spacing={2} direction={"row"} height={100}>
          <TextField
            label="아이디"
            id="id-readonly"
            type="text"
            value={idLocal}
            InputProps={{ readOnly: true }}
          />
          <TextField
            label="패스워드"
            id="pwd-readonly"
            type="text"
            value={pwdLocal}
            InputProps={{ readOnly: true }}
          />
        </Stack>
      </Box>
    </Stack>
  );
}
