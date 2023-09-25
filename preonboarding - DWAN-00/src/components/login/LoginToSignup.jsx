import React from "react";
import { Link } from "react-router-dom";

const LoginToSignup = () => {
  return (
    <div>
      <div className="flex flex-row mt-24 justify-center text-xl">
        <p>아직 회원이 아니신가요?</p>
        <Link
          to="/signup"
          className="text-black-600 ml-4 before:text-black visited:text-black"
        >
          회원가입
        </Link>
      </div>
    </div>
  );
};

export default LoginToSignup;
