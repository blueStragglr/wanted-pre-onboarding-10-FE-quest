import React, { useState } from "react";

const index = () => {
  const [count, setCount] = useState(0);
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");
  const loginForm = () => {
    if (id === "" || pw === "") {
      alert("아이디 패스워드 입력을 해주세요");
      return;
    }
    console.log(`id : ${id} pw : ${pw}`);
  };
  return (
    <div className=" flex flex-col justify-center h-[300px] w-[300px] gap-3">
      <h1 className="flex justify-center font-bold m-10 text-2xl"> 로그인 페이지 </h1>
      <div className="flex justify-between">
        <label className="text-sm font-semibold " htmlFor="id">
          아이디 :{" "}
        </label>
        <input
          id="id"
          className="rounded-md ring-1 ring-inset ring-gray-300  text-sm p-1"
          type="text"
          onChange={(e) => {
            setId(e.target.value);
          }}></input>
      </div>
      <div className="flex justify-between">
        <label className="text-sm font-semibold " htmlFor="pw">
          패스워드 :{" "}
        </label>

        <input
          id="pw"
          className="rounded-md ring-1 ring-inset ring-gray-300  text-sm p-1"
          type="text"
          onChange={(e) => {
            setPw(e.target.value);
          }}></input>
      </div>
      <button
        type="button"
        className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 
        text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 "
        onClick={loginForm}>
        로그인 버튼{" "}
      </button>
    </div>
  );
};

export default index;
