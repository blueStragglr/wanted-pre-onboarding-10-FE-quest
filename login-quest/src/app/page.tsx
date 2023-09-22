"use client";

import React, { MouseEvent, useState } from "react";

const LoginPage = () => {
  const [userInfo, setUserInfo] = useState({
    id: "",
    pw: "",
  });

  const onSubmit = (e: MouseEvent) => {
    e.preventDefault();
    console.log(userInfo);
  };

  return (
    <main className="max-w-sm mx-auto text-center pt-10">
      <h1 className="text-xl mb-10">로그인</h1>
      <form className="flex gap-y-5 flex-col">
        <input
          type="text"
          placeholder="아이디"
          className="rounded-md px-3 py-2 border-gray-500 border-solid border-[1px]"
          value={userInfo.id}
          onChange={(e) => setUserInfo((prev) => ({ ...prev, id: e.target.value }))}
        />
        <input
          type="password"
          placeholder="비밀번호"
          className="rounded-md px-3 py-2 border-gray-500 border-solid border-[1px]"
          value={userInfo.pw}
          onChange={(e) => setUserInfo((prev) => ({ ...prev, pw: e.target.value }))}
        />
        <button className="bg-black text-white rounded-md py-2" onClick={onSubmit}>
          로그인
        </button>
      </form>
    </main>
  );
};

export default LoginPage;
