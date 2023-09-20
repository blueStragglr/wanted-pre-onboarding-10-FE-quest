import axios from "axios";
import React, { useEffect, useState } from "react";
import Nav from "../UI/Nav";
import styled from "styled-components";

const NameListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* 그리드 컬럼 개수 조정 */
  gap: 10px; /* 그리드 아이템 간격 조정 */
  max-width: 600px;
  margin: 0 auto;
`;

const NameCard = styled.div`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  text-align: center;
`;
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
      <NameCard key={data.id}>{data.name}</NameCard>
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
          <NameListContainer>{showList}</NameListContainer>
        </>
      )}
    </div>
  );
}
