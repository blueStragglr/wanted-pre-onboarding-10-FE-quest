import React, { useEffect, useState } from 'react';
import axios from 'axios';

const SecondPage = () => {
  const [data, setData] = useState(null);
  useEffect(() => {
    const getData = async () => {
      const res = await axios.get('/posts');
      setData(res.data);
    };
    getData();
  }, []);
  return <div>{data !== null && data}</div>;
};

export default SecondPage;
