import React from "react";
import { Outlet } from "react-router-dom";

const index = () => {
  return (
    <div>
      <h1 className="text-2xl">페이지 이동</h1>
      <div className="flex gap-3">
        <a
          className=" border-fuchsia-500 bg-fuchsia-100 p-1 border rounded-md"
          href="/login">
          로그인 페이지 이동
        </a>

        <a
          className=" border-blue-500 bg-blue-300 p-1  border rounded-md"
          href="/mock">
          데이타페이지 이동
        </a>
      </div>

      <Outlet />
    </div>
  );
};

export default index;
