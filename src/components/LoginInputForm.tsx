import { Box, Flex, Stack } from "@chakra-ui/react";
import { Input, Button } from "antd";
import { useFormik } from "formik";
import {
  EyeInvisibleOutlined,
  EyeTwoTone,
  KeyOutlined,
  UserOutlined,
} from "@ant-design/icons";

import * as Yup from "yup";

export const LoginInputForm = () => {
  const onSubmit = () => {
    setErrors(errors);
    console.log(values);
  };
  const { values, errors, setErrors, handleBlur, setValues, setTouched } =
    useFormik({
      initialValues: {
        id: "",
        pw: "",
      },
      validationSchema: Yup.object({
        id: Yup.string().required("Id is required"),
        pw: Yup.string().max(30).required("Password is required"),
      }),
      onSubmit,
    });

  return (
    <Box
      color="gray.500"
      fontWeight="semibold"
      letterSpacing="wide"
      fontSize="xs"
      textTransform="uppercase"
      ml="2"
      width={500}
    >
      <Flex direction="column">
        <Stack alignItems={"center"}>
          <Input
            placeholder="Enter Id"
            size="large"
            status={errors.id ? "error" : ""}
            style={{ width: "400px" }}
            prefix={<UserOutlined />}
            onBlur={handleBlur}
            onChange={(e) => setValues({ ...values, id: e.target.value })}
          />
          <p style={{ fontSize: "12px", color: "#ff4d4f", textAlign: "left" }}>
            {errors.id}
          </p>
          <Input.Password
            placeholder="Enter Password"
            size={"large"}
            status={errors.pw ? "error" : ""}
            style={{ width: "400px" }}
            iconRender={(visible) =>
              visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
            }
            prefix={<KeyOutlined />}
            onChange={(e) => {
              setValues({ ...values, pw: e.target.value });
            }}
          />
          <p style={{ fontSize: "12px", color: "#ff4d4f", textAlign: "left" }}>
            {errors.pw}
          </p>
        </Stack>
        <Stack alignItems={"center"} marginTop={"20px"}>
          <Button
            size={"large"}
            style={{
              width: "50%",
              color: "white",
            }}
            type={"primary"}
            onClick={onSubmit}
          >
            Login
          </Button>
        </Stack>
      </Flex>
    </Box>
  );
};
