import styled from 'styled-components';
import { Outlet, useNavigate } from 'react-router-dom';
import Button from './Button';
import colors from '../../style/colors';

const Layout = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <HomeButton
        variant="secondary"
        onClick={() => {
          navigate('/');
        }}
        style={{
          color: colors.black50,
        }}
      >
        🏡 홈화면으로...
      </HomeButton>
      <Outlet />
    </Container>
  );
};

const Container = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 80px;
  height: 100vh;
  min-width: 850px;
`;

const HomeButton = styled(Button)`
  position: absolute;
  top: 20px;
  left: 20px;
`;

export default Layout;
