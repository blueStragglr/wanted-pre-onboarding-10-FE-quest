import "../App.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Main() {
  const navigator = useNavigate();
  const [id, setId] = useState();
  const [pw, setPw] = useState();

  const onChange = (e, value) => {
    const input = e.target.value;
    value === "id" ? setId(input) : setPw(input);
  };

  const print = () => {
    console.log("아이디 : ", id);
    console.log("비밀번호 : ", pw);
  };
  return (
    <>
      <p
        onClick={() => navigator("/api")}
        style={{
          position: "absolute",
          margin: "24px 0 0 36px",
          fontSize: "18px",
          fontWeight: "bold",
          cursor: "pointer",
        }}
      >
        API Page
      </p>
      <div className="App">
        <div className="container">
          <div className="center">
            <h1 style={{ marginBottom: 0 }}>Login</h1>
            <p className="sub">
              계정에 로그인하려면 세부 정보를 입력해 주세요.
            </p>
          </div>
          <div style={{ width: "100%" }}>
            <div className="input-container">
              <input
                className="input"
                placeholder="아이디 입력"
                onChange={(e) => onChange(e, "id")}
              />
              <input
                className="input"
                placeholder="비밀번호 입력"
                onChange={(e) => onChange(e, "pw")}
              />
            </div>
            <p
              style={{
                fontSize: "11px",
                color: "#181818",
                margin: "16px 0",
              }}
            >
              아이디 찾기 / 비밀번호 찾기
            </p>
          </div>
          <div className="center">
            <button
              onClick={print}
              style={{
                borderStyle: "none",
                width: "100%",
                borderRadius: "4px",
                background: "#FFB6D9",
                opacity: "0.8",
                height: "35px",
                fontWeight: "700",
                cursor: "pointer",
              }}
            >
              로그인
            </button>
            <div style={{ display: "flex" }}>
              <p
                style={{
                  fontSize: "12px",
                  fontWeight: "400",
                }}
              >
                등록된 계정이 없나요?
              </p>
              <button
                style={{
                  borderStyle: "none",
                  fontWeight: "700",
                  background: "none",
                }}
              >
                회원가입 하기
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Main;
