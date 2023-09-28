import { usePage } from '@/contexts/PageContext';
import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import Main from '@/pages/Main';
import Signin from '@/pages/Signin';

const App = () => {
  const page = usePage();
  console.log(page);

  return <Background>{page === 'main' ? <Main /> : <Signin />}</Background>;
};

export default App;

const Background = styled(Box)`
  margin: 0 auto;
  max-width: 50rem;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(to right, rgb(0, 57, 115), rgb(229, 229, 190));
  color: white;
`;
