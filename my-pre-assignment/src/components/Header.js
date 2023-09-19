import React from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div>
        <button
          type="button"
          onClick={() => {
            navigate("/");
          }}
        >
          메인
        </button>
        <button
          type="button"
          onClick={() => {
            navigate("/list");
          }}
        >
          목록
        </button>
        <button
          type="button"
          onClick={() => {
            navigate("/login");
          }}
        >
          로그인
        </button>
      </div>
    </div>
  );
};

export default Header;
