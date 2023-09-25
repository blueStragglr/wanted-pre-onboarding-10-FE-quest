import React from "react";
import { Link } from "react-router-dom";

const TitleLogo = () => {
  return (
    <div className="flex justify-center m-[4rem]">
      <Link to="/">
        <img
          className="w-[20rem] justify-center cursor-pointer"
          src="/icon/title-logo.png"
          alt="title-logo"
        ></img>
      </Link>
    </div>
  );
};

export default TitleLogo;
