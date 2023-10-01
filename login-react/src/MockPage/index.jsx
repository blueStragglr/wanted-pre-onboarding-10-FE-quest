import React, { useEffect, useState } from "react";

const index = () => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://64f732e69d775408495348ae.mockapi.io/api/v1/authmock",
        {
          method: "GET",
        }
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const jsonData = await response.json();
      setData(jsonData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <h1>
        데이터 통신 url :
        https://64f732e69d775408495348ae.mockapi.io/api/v1/authmock
      </h1>
      {data.length < 1 ? (
        <div> loding...</div>
      ) : (
        data.map((item) => (
          <div className="flex">
            <strong key={item.id + "id"}>{item.id} : </strong>
            <p key={item.id + "name"}>{item.name}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default index;
