import { useEffect, useState } from 'react';
import styled from 'styled-components';

const PageContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
`;

const ListItem = styled.li`
  margin: 5px 0;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #f5f5f5;
  list-style: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const MockPage = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://64f732e69d775408495348ae.mockapi.io/api/v1/authmock')
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <PageContainer>
      <h2>모의 API 호출 페이지</h2>
      <ul>
        {data?.map(({ id, name }) => (
          <ListItem key={id}>
            <span>{id} | {name}</span>
          </ListItem>
        ))}
      </ul>
    </PageContainer>
  );
}

export default MockPage;
