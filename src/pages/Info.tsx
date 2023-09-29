import { useEffect, useState } from 'react';
import { Container } from '@mui/material';
import axios from 'axios';

type TInfo = {
  name: string;
  id: string;
};

const Info = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [state, setState] = useState<TInfo[]>([]);

  useEffect(() => {
    const getData = async () => {
      setIsLoading(true);

      const { data } = await axios.get<TInfo[]>(
        'https://64f732e69d775408495348ae.mockapi.io/api/v1/authmock'
      );

      setState(data);
      setIsLoading(false);
    };

    getData();
  }, []);

  return (
    <Container
      sx={{
        border: '1px gray solid',
        borderRadius: 3,
        minHeight: '100vh',
        position: 'relative',
      }}
      maxWidth="xs"
    >
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        state.map(({ id, name }) => (
          <p key={id}>
            {id}. {name}
          </p>
        ))
      )}
    </Container>
  );
};

export default Info;
