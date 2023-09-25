import React, { useState } from "react";

const Search = () => {
  const [search, setSearch] = useState("");
  const onChange = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div>
      <div className="flexCenter flex-row items-center w-[80rem] m-[2rem]">
        <input
          className="searchComponent rounded-full w-[60rem] h-[5rem] text-[1.6rem] font-semibold text-center"
          placeholder="검색어를 입력하세요"
          type="text"
          value={search}
          onChange={onChange}
        />
      </div>
    </div>
  );
};

export default Search;
