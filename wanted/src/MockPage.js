import React, { useEffect, useState } from "react";
import axios from "axios";
import SquareButton from "./SquareButton";
import { useNavigate } from "react-router-dom";

const MockPage = () => {
  const navigate = useNavigate();
  const URL = "https://64f732e69d775408495348ae.mockapi.io/api/v1/authmock";
  const [mockData, setMockData] = useState(null);
  const getMock = async () => {
    const response = await axios
      .get(URL)
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        return error;
      });

    setMockData(response);
  };

  useEffect(() => {
    getMock();
  }, []);

  if (mockData) {
    return (
      <article>
        <SquareButton
          color={"mint"}
          isDisabled={false}
          width={null}
          height={null}
          text={"로그인 페이지 가기"}
          buttonType={null}
          onClickEvent={() => {
            navigate("/");
          }}
        />
        <ol>
          {mockData.map((data) => (
            <li>
              <div>
                <div>name : </div>
                <div>{data.name}</div>
              </div>
              <div>
                <div>id : </div>
                <div>{data.id}</div>
              </div>
            </li>
          ))}
        </ol>
        <style jsx>{`
          article {
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            align-items: center;
            min-height: 100vh;
            padding: 2rem;
          }
          ol {
            width: 100%;
            display: flex;
            flex-direction: column;
            gap: 1rem;
            padding: 0;
          }
          li {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: flex-start;
            padding: 1rem;
            border-radius: 0.5rem;
            background-color: white;
            box-shadow: 0px 2px 10px 0px rgba(5, 5, 5, 0.15);
            height: 2rem;
          }
          li > div {
            display: flex;
            gap: 0.5rem;
          }
        `}</style>
      </article>
    );
  } else {
    return <div>데이터를 불러오는 중입니다.</div>;
  }
};

export default MockPage;
