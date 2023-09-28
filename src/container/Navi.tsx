import { useNavigate } from 'react-router-dom';
import Button from '../components/header/navi/Button';

type NaviProps = {
  isMock: boolean;
};

const Navi = ({ isMock }: NaviProps) => {
  const navigate = useNavigate();
  const onClick = () => navigate(isMock ? '/' : '/mock');

  return (
    <Button
      onClick={onClick}
      text={isMock ? '로그인 화면으로 가기' : 'Mock API 결과 보러 가기'}
    />
  );
};

export default Navi;
