/**
 * 페이지 2
 * - Mock API를 이용해 화면에 호출 결과를 출력하는 페이지
 */

import axios from "axios";
import { useEffect, useState } from "react";
import { styled } from "styled-components";

const Page2 = () => {
  const [resData, setResData] = useState([]);

  // api 호출
  const loadAPI = () => {
    return axios.get(
      "https://64f732e69d775408495348ae.mockapi.io/api/v1/authmock"
    );
  };

  useEffect(() => {
    loadAPI()
      .then((res) => {
        // console.log(res.data);
        setResData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  console.log(resData);
  return (
    <MainContainer>
      {resData.map((data: any) => {
        return (
          <p className="text">
            {data.id} : {data.name}
          </p>
        );
      })}
    </MainContainer>
  );
};

export default Page2;

const MainContainer = styled.div`
  margin: 0;
  width: 100vw;
  height: 100%;
  background-color: #eeeeee;
  .text {
    color: #000;
    font-family: SUIT Variable;
    font-size: 1rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;

    margin: 0;
    padding: 0.5rem 1rem;
  }
`;
