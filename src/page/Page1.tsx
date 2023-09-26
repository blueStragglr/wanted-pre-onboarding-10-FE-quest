import { useState } from "react";

interface Login {
  id: string;
  password: string;
}

const Page1 = () => {
  const [loginData, setLoginData] = useState<Login>({
    id: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLoginData({ ...loginData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(`id: ${loginData.id}`);
    console.log(`password: ${loginData.password}`);
  };

  return (
    <main>
      <form onSubmit={handleSubmit}>
        <span>아이디</span>
        <input
          placeholder="id"
          onChange={handleChange}
          name="id"
          value={loginData.id}
        />
        <span>비밀번호</span>
        <input
          placeholder="password"
          onChange={handleChange}
          name="password"
          value={loginData.password}
        />
        <button type="submit">버튼</button>
      </form>
    </main>
  );
};

export default Page1;
