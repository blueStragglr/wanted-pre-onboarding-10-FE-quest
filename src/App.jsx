import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Login from './pages/Login';
import List from './pages/List';
import Layout from './layout';
import Home from './pages/Home';
import ErrorPage from './pages/ErrorPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home /> },
      { path: '/login', element: <Login /> },
      { path: '/user-list', element: <List /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
