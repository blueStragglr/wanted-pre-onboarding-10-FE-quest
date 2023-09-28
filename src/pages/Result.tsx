import axios from "axios";
import { useQuery } from "@tanstack/react-query";

type Data = {
  name: string;
  id: string;
};

const getData = async () => {
  const { data } = await axios.get<Data[]>(
    "https://64f732e69d775408495348ae.mockapi.io/api/v1/authmock"
  );
  return data;
};

const Result = () => {
  const { data, isLoading } = useQuery(["data"], getData);

  if (isLoading) return <div>...로딩중</div>;

  return (
    <ul>
      <h1>총 인원수 : {data?.length} 명</h1>
      {data?.map(({ name, id }) => (
        <li key={id}>
          <p>name : {name}</p>
        </li>
      ))}
    </ul>
  );
};

export default Result;
