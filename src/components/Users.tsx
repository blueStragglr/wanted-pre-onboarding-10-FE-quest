'use client';

import { useEffect, useState } from 'react';

export default function Users() {
  const [users, setUsers] = useState('Loading...');

  useEffect(() => {
    fetch('https://64f732e69d775408495348ae.mockapi.io/api/v1/authmock')
      .then((res) => res.json())
      .then((data) => setUsers(data.data));
  }, []);

  return <article>{users}</article>;
}
