import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Mock from "./Mock";

function MoackAPI() {
  const [data, setData] = useState([]);

  async function fetchData() {
    const response = await fetch(
      "https://64f732e69d775408495348ae.mockapi.io/api/v1/authmock",
      {
        method: "GET",
      }
    );
    const json = await response.json();
    setData(json);
  }

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      <Link to="/">Back</Link>
      <ul>
        {data.map((item) => (
          <Mock key={item.id} item={item}/>
        ))}
      </ul>
    </>
  );
}

export default MoackAPI;
