import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Login from './pages/Login';
import List from './pages/List';
import Layout from './layout';
import Home from './pages/Home';
import ErrorPage from './pages/ErrorPage';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {},
  },
});

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
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}

export default App;
