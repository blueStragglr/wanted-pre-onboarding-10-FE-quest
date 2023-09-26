import React, { useEffect, useState } from 'react';
import * as S from './style';
import axios from 'axios';

const Test = () => {
  const [info, setInfo] = useState<any>();
  const getAPI = () => {
    return axios.get(
      'https://64f732e69d775408495348ae.mockapi.io/api/v1/authmock'
    );
  };

  useEffect(() => {
    getAPI()
      .then((res) => {
        setInfo(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <S.AllWarp>
      <S.TitleDiv>API Test</S.TitleDiv>
      <S.ContentWrap>
        {info?.map((data: any) => {
          return (
            <div key={data.id}>
              {data.id} : {data.name}
            </div>
          );
        })}
      </S.ContentWrap>
    </S.AllWarp>
  );
};

export default Test;
