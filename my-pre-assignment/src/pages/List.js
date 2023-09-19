import React, { useEffect, useState } from "react";

const List = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    // API 호출을 수행하는 함수 정의
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://64f732e69d775408495348ae.mockapi.io/api/v1/authmock"
        );

        if (!response.ok) {
          throw new Error("API 요청이 실패했습니다.");
        }

        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error("API 호출 오류:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <ul>
        {data ? (
          data.map(function (item) {
            return (
              <li key={item.id}>
                <span>id: {item.id} </span>
                <span>name: {item.name}</span>
              </li>
            );
          })
        ) : (
          <p>Loading...</p>
        )}
      </ul>
    </div>
  );
};

export default List;
