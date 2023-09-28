import { useLocation } from 'react-router-dom';
import Title from '../components/header/Title';
import Wrapper from '../components/header/Wrapper';
import Navi from './Navi';

const Header = () => {
  const { pathname } = useLocation();

  return (
    <Wrapper>
      <Title text={pathname === '/mock' ? 'Mock API 결과.' : '로그인.'} />
      <Navi isMock={pathname === '/mock'} />
    </Wrapper>
  );
};

export default Header;
