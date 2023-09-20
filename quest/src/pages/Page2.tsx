import { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";

interface DataProps {
  name: string;
  id: number;
}

const URL = "https://64f732e69d775408495348ae.mockapi.io/api/v1/authmock";

export const GetAPI = () => {
  const [userData, setUserData] = useState<DataProps[]>([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const result = await axios.get(URL);
      result && setUserData(result.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Table>
      <th>name</th>
      <th>id</th>
      {userData.map((index: DataProps) => (
        <tr>
          <td>{index.name}</td>
          <td>{index.id}</td>
        </tr>
      ))}
    </Table>
  );
};

const Table = styled.table`
  border: 1px solid #bcbcbc;
  border-collapse: collapse;

  th,
  td {
    border: 1px solid #bcbcbc;
    text-align: left;
    padding: 4px;
  }
`;
