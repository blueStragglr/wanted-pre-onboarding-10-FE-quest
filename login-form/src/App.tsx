import { ChangeEvent, useState } from "react";
import "./App.css";
import { Link } from "react-router-dom";

function App() {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  const onButtonClick = () => {
    console.log(`id : ${id}`);
    console.log(`pw : ${password}`);
  };

  return (
    <div className="wrapper">
      <div className="header">wanted</div>
      <h1>
        PRE-ONBOARDING
        <br />
        FRONTEND CHALLENGE
      </h1>

      <h2>
        로그인 기능 구현
        <br />
        하나부터 열까지!
      </h2>

      <div className="form">
        <div className="id">아이디</div>
        <input
          placeholder="아이디를 입력해주세요."
          autoComplete="off"
          value={id}
          onChange={(e: ChangeEvent<HTMLInputElement>) => setId(e.target.value)}
        />

        <div className="password">비밀번호</div>
        <input
          type="password"
          autoComplete="off"
          value={password}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setPassword(e.target.value)
          }
        />
        <button onClick={onButtonClick}>로그인</button>

        <Link className="link" to="/api">
          api 테스트 &gt;
        </Link>
      </div>
    </div>
  );
}

export default App;
