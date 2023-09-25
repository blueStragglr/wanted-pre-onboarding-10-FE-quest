import React from 'react';
import dynamic from 'next/dynamic';

const Main = dynamic(() => import('@/components/result/Main'), { ssr: false });

function Result() {
  return (
    <>
      <Main />
    </>
  );
}

export default Result;
