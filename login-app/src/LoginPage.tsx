import React, { useRef, useState } from "react";

const LoginPage = (): React.ReactElement => {
  const idRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);

  const handleInputBtn = async () => {
    const id = idRef.current?.value;
    const password = passwordRef.current?.value;

    console.log(id, password);
  };

  return (
    <div className="h-screen flex justify-center items-center">
      <div className="bg-white rounded-2xl shadow-md w-fit p-4">
        <div className="flex items-center mb-3">
          <div className="w-9 font-bold">ID</div>
          <form>
            <input
              type="text"
              ref={idRef}
              className="bg-slate-100 rounded-md outline-none px-4 py-2"
            />
          </form>
        </div>
        <div className="flex items-center mb-3">
          <div className="w-9 font-bold">PW</div>
          <form>
            <input
              type="password"
              ref={passwordRef}
              className="bg-slate-100 rounded-md outline-none px-4 py-2"
            />
          </form>
        </div>
        <button
          type="button"
          className="bg-[#96C291] font-bold px-4 py-1 w-[calc(100%)] rounded-md"
          onClick={handleInputBtn}
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
