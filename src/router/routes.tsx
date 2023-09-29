import { createBrowserRouter } from 'react-router-dom';
import App from '../App';

export const routes = createBrowserRouter(
  [
    {
      path: '/',
      element: <App />,
      children: [
        { index: true, element: <div>home</div> },
        { path: '/login', element: <div>login</div> },
        { path: '/api-check', element: <div>api-chec</div> },
      ],
    },
  ],
  { basename: '/' },
);

export default routes;
