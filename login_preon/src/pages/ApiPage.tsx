import React, { useState, useEffect } from "react";

interface IData {
  name: string;
  id: string;
}

const ApiPage = () => {
  const [data, setData] = useState<IData[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  useEffect(() => {
    fetch("https://64f732e69d775408495348ae.mockapi.io/api/v1/authmock")
      .then((res) => res.json())
      .then((info) => {
        setData(info);
        setIsLoading(false);
      });
  }, []);
  console.log(isLoading);
  return (
    <div>
      <div>
        <h1>API 호출 연습 페이지</h1>
        <div>
          {isLoading ? (
            "Loading"
          ) : (
            <div>
              <div>
                {data.map((elem) => (
                  <>
                    <div>
                      <h5>{elem.name}</h5>
                      <span>{elem.id}</span>
                    </div>
                  </>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ApiPage;
