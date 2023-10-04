import React, { useState } from "react";
import axios from "axios";

export default function Login() {
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");

  async function onChangeIdInput(e) {
    try {
      setUserId(e.target.value);
    } catch (error) {
      console.error("Id Input error", error);
    }
  }

  async function onChangePasswordInput(e) {
    try {
      setPassword(e.target.value);
    } catch (error) {
      console.error("Password Input error", error);
    }
  }

  async function handleClickLogin(e) {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://64f732e69d775408495348ae.mockapi.io/api/v1/authmock",
        {
          userId,
          password,
        }
      );

      if (response.status === 200) {
        console.log("로그인 성공");
        // 로그인 성공 후에 필요한 동작을 수행하거나 홈페이지로 이동할 수 있습니다.
      } else {
        console.error("로그인 실패");
      }
    } catch (error) {
      console.error("로그인 오류", error);
    }
  }

  return (
    <div>
      <div>로그인 미션</div>
      <input type="text" value={userId} onChange={onChangeIdInput} />
      <input type="text" value={password} onChange={onChangePasswordInput} />
      <button onClick={handleClickLogin}>로그인</button>
    </div>
  );
}
