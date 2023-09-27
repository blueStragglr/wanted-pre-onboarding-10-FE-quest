import Input from "@/components/Input";
import Button from "@/components/Button";
import { useState } from "react";

interface ILoginInfo {
  id: string;
  password: string;
}

export default function LoginPage() {
  const [loginInfo, setLoginInfo] = useState<ILoginInfo>({
    id: "",
    password: "",
  });

  function handleLogin() {}
  function onChange() {}

  return (
    <div className="p-24">
      <h2>Login</h2>
      <form action="" className="flex flex-col">
        <Input
          type="text"
          name="id"
          placeholder="아이디를 입력해주세요"
          label="아이디"
          value={loginInfo.id}
          onChange={onChange}
        />
        <Input
          type="password"
          name="password"
          placeholder="비밀번호를 입력해주세요"
          label="비밀번호"
          value={loginInfo.password}
          onChange={onChange}
        />
        <Button onClick={handleLogin}>로그인</Button>
      </form>
    </div>
  );
}
