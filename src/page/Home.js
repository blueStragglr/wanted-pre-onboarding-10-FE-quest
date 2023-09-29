import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h1>이동 할 페이지를 선택하세요</h1>
      <button
        onClick={() => {
          navigate('/first');
        }}
      >
        첫번째 페이지
      </button>
      <button
        onClick={() => {
          navigate('/second');
        }}
      >
        두번째 페이지
      </button>
    </div>
  );
};

export default Home;
