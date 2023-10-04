import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Page2 = () => {
  const [apiData, setApiData] = useState([]);
  console.log(apiData);
  useEffect(() => {
    // Mock API 호출을 모방합니다.
    axios
      .get('http://localhost:4000/test')
      .then((response) => {
        setApiData(response.data);

      })
      .catch((error) => {
        console.error('API 호출 중 오류 발생: ', error);
      });
  }, []);

  return (
    <div>
      <h1>페이지 2: API 호출 결과</h1>
      
      <ul>
        {apiData.map((item) => (
          <li key={item.id}>{item.id}. {item.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Page2;
