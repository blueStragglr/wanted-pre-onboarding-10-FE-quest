import { EErrorNo } from "@Constants/errorKeyValue";
import { useInput } from "@Hooks/useInput";
import {
  Box,
  Button,
  Divider,
  FormControl,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useMutation } from "@tanstack/react-query";
import { FormEventHandler } from "react";

export function Page2() {
  const mutation = useMutation({
    mutationFn: () =>
      fetch("https://64f732e69d775408495348ae.mockapi.io/api/v1/authmock", {
        method: "GET",
      }),
  });

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
    let isError = false;
    e.preventDefault();

    if (id === "") {
      setIdErrorNo(EErrorNo.INPUT_ERROR_EMPTY_ID);
      isError = true;
    }
    if (pwd === "") {
      setPwdErrorNo(EErrorNo.INPUT_ERROR_EMPTY_PWD);
      isError = true;
    }

    if (isError) return;
    mutation.mutate();
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
        {mutation.isLoading ? <Typography>로딩 중</Typography> : <></>}
        {mutation.isError ? <Typography>에러 발생</Typography> : <></>}
      </Box>
    </Stack>
  );
}
