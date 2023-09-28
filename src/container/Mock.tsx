import { useEffect, useState } from 'react';
import Wrapper from '../components/common/Wrapper';
import Spinner from '../components/mock/Spinner';
import Text from '../components/mock/Text';

const Mock = () => {
  const [data, setData] = useState<{ id: string; name: string }[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getData = async () => {
      setIsLoading(true);
      const response = await fetch(
        'https://64f732e69d775408495348ae.mockapi.io/api/v1/authmock',
        { method: 'GET', headers: { 'Content-Type': 'application/json' } }
      ).then((value) => value.json());

      setData(response);
      setIsLoading(false);
    };

    getData();
  }, []);

  const dataComponents = data.map((value) => <Text key={value.id} text={value.name} />);

  return isLoading ? (
    <Wrapper>
      <Spinner />
    </Wrapper>
  ) : (
    <Wrapper>{dataComponents}</Wrapper>
  );
};

export default Mock;
