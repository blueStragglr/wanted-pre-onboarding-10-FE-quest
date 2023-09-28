import { usePage } from '@/contexts/PageContext';
import Main from '@/pages/Main';
import Signin from '@/pages/Signin';

const App = () => {
  const page = usePage();

  switch (page) {
    case 'main':
      return <Main />;
    case 'signin':
      return <Signin />;
    default:
      return <Signin />;
  }
};

export default App;
