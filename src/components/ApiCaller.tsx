import React, { useEffect, useState } from "react";

export const ApiCaller = () => {
  const [data, setData] = useState<[] | null>(null);

  useEffect(() => {
    fetch("https://64f732e69d775408495348ae.mockapi.io/api/v1/authmock")
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <h2>API 결과</h2>
      {data &&
        data.map((item, index) => (
          <div key={index}>
            <p>{JSON.stringify(item, null, 2)}</p>
          </div>
        ))}
    </div>
  );
};
