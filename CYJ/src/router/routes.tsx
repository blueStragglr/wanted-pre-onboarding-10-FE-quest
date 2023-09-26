import LoginPage from '../pages/login/index';
import TestPage from '../pages/test/index';

const router = [
  {
    path: 'login',
    element: <LoginPage />,
  },
  {
    path: 'test',
    element: <TestPage />,
  },
];

export default router;
