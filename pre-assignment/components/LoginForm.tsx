"use client";

import Input from "@/components/common/Input";
import Button from "@/components/common/Button";
import { useState } from "react";

interface ILoginInfo {
  id: string;
  password: string;
}

export default function LoginForm() {
  const [loginInfo, setLoginInfo] = useState<ILoginInfo>({
    id: "",
    password: "",
  });

  const [inputMsg, setInputMsg] = useState<ILoginInfo>({
    id: "",
    password: "",
  });

  function handleLogin(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
  }

  function onChange(e: React.FormEvent<HTMLInputElement>) {
    const { name, value } = e.currentTarget;
    setLoginInfo({ ...loginInfo, [name]: value });
    checkValidation(value, name as keyof ILoginInfo);
  }

  function checkValidation(value: string, name: keyof ILoginInfo) {
    const msg = {
      id: {
        min: "아이디는 필수 항목입니다.",
        max: "아이디는 최대 12글자까지 허용합니다.",
      },
      password: {
        min: "비밀번호는 필수 항목입니다.",
        max: "비밀번호는 최대 20글자까지 허용합니다.",
      },
    };
    switch (name) {
      case "id":
        if (value.length === 0) {
          setInputMsg({ ...inputMsg, [name]: msg.id.min });
        } else if (value.length > 12) {
          setInputMsg({ ...inputMsg, [name]: msg.id.max });
        } else {
          setInputMsg({ ...inputMsg, [name]: "" });
        }
        break;
      case "password":
        if (value.length === 0) {
          setInputMsg({ ...inputMsg, [name]: msg.password.min });
        } else if (value.length > 20) {
          setInputMsg({ ...inputMsg, [name]: msg.password.max });
        } else {
          setInputMsg({ ...inputMsg, [name]: "" });
        }
        break;
    }
  }

  return (
    <form className="flex flex-col" onSubmit={handleLogin}>
      <Input
        type="text"
        name="id"
        placeholder="아이디를 입력해주세요"
        label="아이디"
        value={loginInfo.id}
        onChange={onChange}
      />
      <p className="text-red-600">{inputMsg["id"]}</p>
      <Input
        type="password"
        name="password"
        placeholder="비밀번호를 입력해주세요"
        label="비밀번호"
        value={loginInfo.password}
        onChange={onChange}
      />
      <p className="text-red-600">{inputMsg["password"]}</p>
      <div className="text-center my-2 p-2">
        <Button onClick={handleLogin} className="w-[100%]">
          로그인
        </Button>
      </div>
    </form>
  );
}
