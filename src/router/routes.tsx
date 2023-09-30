import { createBrowserRouter } from 'react-router-dom';

import Home from '../pages/Home';
import Layout from '../common/components/Layout';
import Login from '../pages/Login';
import Requset from '../pages/Requset';

export const routes = createBrowserRouter(
  [
    {
      path: '/',
      element: <Layout />,
      children: [
        { index: true, element: <Home /> },
        { path: '/login', element: <Login /> },
        { path: '/request', element: <Requset /> },
      ],
    },
  ],
  { basename: '/' },
);

export default routes;
