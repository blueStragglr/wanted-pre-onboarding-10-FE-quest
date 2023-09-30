import { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import Spinner from '../components/Spinner';
import UserCard from '../components/UserCard';

const UserList = () => {
  const [users, setUsers] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          'https://64f732e69d775408495348ae.mockapi.io/api/v1/authmock',
        );
        setUsers(response.data);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return loading ? (
    <Spinner />
  ) : (
    <Grid>
      {users.map((user) => (
        <UserCard key={user.id} name={user.name} />
      ))}
    </Grid>
  );
};

export default UserList;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  width: 100%;
  gap: 30px;
  height: 100%;
  overflow-y: scroll;
  padding: 16px;
`;
