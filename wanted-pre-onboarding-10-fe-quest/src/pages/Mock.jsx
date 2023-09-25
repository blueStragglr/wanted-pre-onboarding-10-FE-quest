import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Mock() {
  const URL = "https://64f732e69d775408495348ae.mockapi.io/api/v1/authmock";
  const [mocks, setMocks] = useState(null);
  const getMocks = async () => {
    const response = await axios
      .get(URL)
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        return error;
      });

    setMocks(response);
  };

  useEffect(() => {
    getMocks();
  }, []);

  if (mocks) {
    return (
      <div className="w-full max-w-md m-auto">
        <header className="pt-20 mb-10">
          <h1 className="text-center text-blue-200 pb-10">
            페이지2 : Mock API를 이용해 화면에 출력하는 페이지입니다. ✅
          </h1>
          <h2 className="text-center text-3xl font-bold text-blue-400">
            Mock API 호출 결과
          </h2>
        </header>
        <button className="h-12 w-full border rounded-md shadow-sm bg-blue-400 font-bold text-white mb-20">
          <a href="/">로그인 화면으로 돌아가기</a>
        </button>
        <div className="pb-10">
          {mocks.map((data) => (
            <li
              className="border-gray-200 border rounded-md px-3 py-2 mb-2 shadow-sm list-none bg-blue-50 "
              key={data.id}
            >
              <p className="text-xl font-bold text-gray-600">
                이름 :
                <span className="font-normal inline-block mx-2">
                  {data.name}
                </span>
              </p>
              <p className="text-xl font-bold text-gray-600">
                아이디:
                <span className="font-normal inline-block mx-2">{data.id}</span>
              </p>
            </li>
          ))}
        </div>
      </div>
    );
  } else {
    return (
      <div className=" mt-20 text-center font-bold text-2xl text-blue-200">
        Loading... 🤔
      </div>
    );
  }
}
