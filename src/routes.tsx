import { createBrowserRouter } from 'react-router-dom';
import Login from './pages/Login';
import Info from './pages/Info';

const router = createBrowserRouter([
  { path: '/', Component: Login },
  { path: '/info', Component: Info },
]);

export default router;
