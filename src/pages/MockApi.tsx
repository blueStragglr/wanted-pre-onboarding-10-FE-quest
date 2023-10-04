import { useEffect, useState } from "react";

interface UserData {
  name: string;
  id: number;
}

const MockApi = () => {
  const [users, setUsers] = useState<UserData[]>();

  useEffect(() => {
    fetch("https://64f732e69d775408495348ae.mockapi.io/api/v1/authmock")
      .then((response) => response.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <ul>
      {users &&
        users.map((user, index) => (
          <li key={index}>
            <span>name: {user.name}</span>
            <span>id: {user.id}</span>
          </li>
        ))}
    </ul>
  );
};

export default MockApi;
