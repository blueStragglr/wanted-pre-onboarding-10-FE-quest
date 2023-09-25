import React from "react";
import LoginSuccess from "../login/LoginSuccess";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Nav = () => {
  const selector = useSelector((state) => state.user);

  return (
    <nav className="flex justify-end">
      <div className="flex justify-end items-center">
        {selector.isLogin && <LoginSuccess />}
        {!selector.isLogin && (
          <Link to="/login" className="navComponent">
            로그인
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Nav;
