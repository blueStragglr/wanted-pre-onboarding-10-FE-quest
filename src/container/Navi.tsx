import { useLocation, useNavigate } from 'react-router-dom';
import Button from '../components/navi/Button';

const Navi = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const onClick = () => navigate(pathname === '/mock' ? '/' : '/mock');

  return (
    <Button
      onClick={onClick}
      text={pathname === '/mock' ? '로그인 화면으로 가기' : 'Mock API 결과 보러 가기'}
    />
  );
};

export default Navi;
