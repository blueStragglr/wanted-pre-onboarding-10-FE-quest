import { createBrowserRouter } from 'react-router-dom';

import Home from '../pages/Home';
import Layout from '../common/components/Layout';
import Login from '../pages/Login';
import UserList from '../pages/UserList';

export const routes = createBrowserRouter(
  [
    {
      path: '/',
      element: <Layout />,
      children: [
        { index: true, element: <Home /> },
        { path: '/login', element: <Login /> },
        { path: '/user-list', element: <UserList /> },
      ],
    },
  ],
  { basename: '/wanted-pre-onboarding-10-FE-quest' },
);

export default routes;
