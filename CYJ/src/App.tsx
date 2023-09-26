import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import CustomRoutes from './router/routes';

const RouterObject = createBrowserRouter(CustomRoutes);

const App = () => {
  return <RouterProvider router={RouterObject} />;
};

export default App;
