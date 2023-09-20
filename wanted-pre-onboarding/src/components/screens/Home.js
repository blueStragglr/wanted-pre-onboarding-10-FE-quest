import axios from "axios";
import React, { useEffect, useState } from "react";
import Nav from "../UI/Nav";

export default function Home() {
  const [datas, setDatas] = useState([]);
  const [loading, setloading] = useState(true);

  const getApi = async () => {
    try {
      const res = await axios.get(`${process.env.REACT_APP_BASE_API_URL}/api/v1/authmock`);
      console.log(res.data);
      setDatas(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const showList = datas.map((data) => (
    <>
      <li key={data.id}>{data.name}</li>
    </>
  ));

  useEffect(() => {
    getApi();
    setloading(false);
  }, []);
  return (
    <div>
      {loading ? (
        <>
          <Nav>홈</Nav>
          <h1>Loading...</h1>
        </>
      ) : (
        <>
          <Nav>홈</Nav>
          <ul>{showList}</ul>
        </>
      )}
    </div>
  );
}
