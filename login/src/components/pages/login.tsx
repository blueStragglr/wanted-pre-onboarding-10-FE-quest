import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useState({
    id: "",
    password: "",
  });

  const handleUserInfo = (e: React.ChangeEvent<HTMLInputElement>) => {
    const copyUserInfo = { ...userInfo };
    if (e.target.id === "id") {
      copyUserInfo.id = e.target.value;
    } else {
      copyUserInfo.password = e.target.value;
    }
    console.log(copyUserInfo);
    setUserInfo(copyUserInfo);
  };

  const handleConfirm = () => {
    navigate("/mock");
  };

  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h1>Pre-on-Boarding</h1>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          border: "1px solid black",
          width: "500px",
          height: "500px",
          borderRadius: "12px",
          gap: "20px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "250px",
            justifyContent: "center",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <label
            style={{
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <span>아이디</span>
            <input type="id" id="id" onChange={(e) => handleUserInfo(e)} />
          </label>
          <label
            style={{
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <span>비밀번호</span>
            <input
              type="password"
              id="password"
              onChange={(e) => handleUserInfo(e)}
            />
          </label>
        </div>
        <button
          style={{ width: "50px", height: "50px" }}
          onClick={() => handleConfirm()}
        >
          확인
        </button>
      </div>
    </div>
  );
};

export default Login;
