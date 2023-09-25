import Nav from "./Nav";
import TitleLogo from "./TitleLogo";
import React from "react";

const Header = () => {
  return (
    <div>
      <header className="flex justify-between items-center ml-[2rem] mr-[2rem]">
        <TitleLogo />
        <Nav />
      </header>
    </div>
  );
};

export default Header;
