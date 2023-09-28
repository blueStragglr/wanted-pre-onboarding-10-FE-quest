import { useState, useEffect } from 'react';
import { styled } from '@mui/material/styles';
import { Button } from '@mui/material';
import { usePageDispatch } from '@/contexts/PageContext';
import { fetchItems } from '@/apis/fetchItems';
import type { Items } from '@/apis/fetchItems';

const Main = () => {
  const [items, setItems] = useState<Items[]>([]);
  const setPage = usePageDispatch();

  useEffect(() => {
    fetchItems().then((res) => res && setItems(res));
  }, []);

  return (
    <WhiteCard>
      <ItemList>
        {items.map((item) => (
          <Item key={item.id}>{item.name}</Item>
        ))}
      </ItemList>
      <Button
        variant="outlined"
        onClick={() => setPage({ type: 'SET_PAGE', payload: 'signin' })}
        sx={{ marginTop: '1rem' }}>
        1번 과제 페이지로 이동
      </Button>
    </WhiteCard>
  );
};

export default Main;

const WhiteCard = styled('div')`
  padding: 1rem;
  color: black;
  background: white;
  border-radius: 2rem;
`;

const ItemList = styled('ul')`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Item = styled('li')``;
