import React from "react";

const SignUpButton = () => {
  return (
    <div className="flexCenter">
      <button
        className="w-[40rem] h-14 rounded-lg text-xl cursor-pointer mt-8 bg-blue text-white "
        variant="primary"
        type="submit"
      >
        회원 가입
      </button>
    </div>
  );
};

export default SignUpButton;
