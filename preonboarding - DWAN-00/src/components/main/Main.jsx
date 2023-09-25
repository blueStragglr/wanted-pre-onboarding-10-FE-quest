import React from "react";
import Footer from "../common/Footer";
import Search from "./Search";

const Main = () => {
  return (
    <div>
      <div className="flexCenter flex-col mt-[12rem]">
        <img
          className="search-logo"
          src="/icon/search-logo.png"
          alt="search-logo"
        ></img>
        <Search />
      </div>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Main;
