import { useState } from 'react';

export default function Login() {
  const [loginValue, setLoginValue] = useState({
    id: '',
    password: '',
  });

  const { id, password } = loginValue;

  const handleLoginInput = (e) => {
    const { name, value } = e.target;
    setLoginValue({
      ...loginValue,
      [name]: value,
    });
  };

  const handleLogin = () => {
    console.log(loginValue);
  };

  return (
    <div>
      <input
        name="id"
        type="text"
        placeholder="아이디를 입력 해 주세요."
        value={id}
        onChange={handleLoginInput}
      />
      <input
        name="password"
        type="password"
        placeholder="비밀번호를 입력 해 주세요."
        value={password}
        onChange={handleLoginInput}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}
