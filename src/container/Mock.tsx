import { useEffect, useState } from 'react';
import Wrapper from '../components/common/Wrapper';

const Mock = () => {
  const [data, setData] = useState('');

  useEffect(() => {
    const getData = async () => {
      const response = await fetch(
        'https://64f732e69d775408495348ae.mockapi.io/api/v1/authmock',
        { method: 'GET', headers: { 'Content-Type': 'application/json' } }
      ).then((value) => value.json());

      setData(
        response
          .map((value: { name: string; id: string }) => `${value.id} ${value.name}`)
          .join('\n')
      );
    };

    getData();
  }, [data]);

  return (
    <Wrapper>
      <pre>{data}</pre>
    </Wrapper>
  );
};

export default Mock;
