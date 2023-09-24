import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <Link to="/login">로그인 페이지로 가기!</Link>
      <br />
      <Link to="/api">api 호출 페이로 가기!</Link>
    </>
  );
};

export default Home;
