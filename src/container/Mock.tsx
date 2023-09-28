import { useEffect, useState } from 'react';
import Wrapper from '../components/common/Wrapper';
import Spinner from '../components/mock/Spinner';

const Mock = () => {
  const [data, setData] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getData = async () => {
      setIsLoading(true);
      const response = await fetch(
        'https://64f732e69d775408495348ae.mockapi.io/api/v1/authmock',
        { method: 'GET', headers: { 'Content-Type': 'application/json' } }
      ).then((value) => value.json());

      setData(
        response
          .map((value: { name: string; id: string }) => `${value.id} ${value.name}`)
          .join('\n')
      );

      setIsLoading(false);
    };

    getData();
  }, [data]);

  return isLoading ? (
    <Wrapper>
      <Spinner />
    </Wrapper>
  ) : (
    <Wrapper>
      <pre>{data}</pre>
    </Wrapper>
  );
};

export default Mock;
