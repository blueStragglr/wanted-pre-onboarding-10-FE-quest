import React, { useEffect, useState } from "react";

export default function ResponsePage() {
  const API = "https://64f732e69d775408495348ae.mockapi.io/api/v1/authmock";
  const [response, setResponse] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getResponse();
  }, []);

  const getResponse = async () => {
    setLoading(true);

    await fetch(API, { method: "GET" })
      .then((response) => response.json())
      .then((data) => setResponse(data))
      .catch((error) => console.log("responseData error", error));

    setLoading(false);
  };
  return (
    <div className="App">
      <h1>✨ Response ✨</h1>
      {loading ? (
        <h3>Loading...</h3>
      ) : (
        <ol>
          {response.map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ol>
      )}
    </div>
  );
}
