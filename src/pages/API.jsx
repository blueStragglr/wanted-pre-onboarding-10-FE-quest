import { React, useState, useEffect } from "react";

export default function APIPage() {
  const [state, setState] = useState([]);
  useEffect(() => {
    getData();
  }, []);
  const getData = () => {
    fetch("https://64f732e69d775408495348ae.mockapi.io/api/v1/authmock", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        setState(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  return (
    <div>
      {state.map((item) => (
        <div key={item.name}>
          <p>Id: {item.id}</p>
          <p>Name: {item.name}</p>
        </div>
      ))}
    </div>
  );
}
