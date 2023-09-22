import { Stack, Button } from '@mui/material';
import { NextPage } from 'next/types';

const Home: NextPage = () => {
  return (
    <div>
      <main>
        <Stack spacing={2} direction='column'>
          <Button variant='text'>Text</Button>
          <Button variant='contained'>test</Button>
          <Button variant='outlined'>test</Button>
        </Stack>
      </main>
    </div>
  );
};

export default Home;
