import React, { useEffect, useState } from "react";
import styled from "styled-components";

const Home = () => {
  const [fetchDatas, setFetchDatas] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const getRequest = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(
        "https://64f732e69d775408495348ae.mockapi.io/api/v1/authmock"
      );

      if (!response.ok) {
        throw new Error("데이터 불러오는데 오류 발생");
      }

      const data = await response.json();
      console.log(data);
      setFetchDatas(data);
    } catch (error) {
      console.error("데이터를 가져오는 동안 오류가 발생", error);
      setError(error);
    }

    setIsLoading(false);
  };

  useEffect(() => {
    getRequest();
  }, []);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Somthing was wrong!</div>;

  return (
    <MainContainer>
      <h2>유저 리스트</h2>
      <ul>
        {fetchDatas?.map((data) => (
          <li key={data.id}>{data.name}</li>
        ))}
      </ul>
    </MainContainer>
  );
};

export default Home;

const MainContainer = styled.div`
  margin: 0 auto;
  text-align: center;

  & > h2 {
    color: var(--color-sub-500);
  }

  & li {
    margin: 10px auto;
  }
`;
