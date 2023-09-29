import { useState } from "react";
import { Link } from "react-router-dom";

export default function Api() {
  const [result, setResult] = useState([]);

  const onButtonClick = async () => {
    const response = await fetch(
      "https://64f732e69d775408495348ae.mockapi.io/api/v1/authmock"
    );
    const result = await response.json();
    console.log(result);
    setResult(result);
  };

  return (
    <div className="wrapper">
      <div className="header">wanted</div>
      <h1>
        PRE-ONBOARDING
        <br />
        FRONTEND CHALLENGE
      </h1>

      <h2>API 호출하기</h2>

      <div style={{ overflow: "auto", width: "100%", height: 200 }}>
        {result.length === 0 ? (
          <div>데이터가 없습니다.</div>
        ) : (
          result.map((item: { id: string; name: string }) => (
            <div key={item.id}>{item.name}</div>
          ))
        )}
      </div>

      <button onClick={onButtonClick}>API 호출하기</button>

      <Link className="link" to="/">
        로그인 돌아가기 &gt;
      </Link>
    </div>
  );
}
