import { useEffect, useState } from 'react';
import {
  Button,
  ButtonGroup,
  Container,
  List,
  ListItem,
  ListItemText,
} from '@mui/material';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

type TInfo = {
  name: string;
  id: string;
};

const Info = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [state, setState] = useState<TInfo[]>([]);
  const navigate = useNavigate();

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
      <ButtonGroup
        sx={{ position: 'absolute', right: 10, top: 10, zIndex: 99 }}
      >
        <Button onClick={() => navigate('/')}>Login 페이지 이동</Button>
      </ButtonGroup>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <List>
          {state.map(({ id, name }) => (
            <ListItem key={id}>
              <ListItemText primary={`${id}. ${name}`} />
            </ListItem>
          ))}
        </List>
      )}
    </Container>
  );
};

export default Info;
