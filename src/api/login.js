import { client } from './api';

export const getUser = async () => {
  const { data } = await client.get(
    'https://64f732e69d775408495348ae.mockapi.io/api/v1/authmock',
  );
  return data;
};
