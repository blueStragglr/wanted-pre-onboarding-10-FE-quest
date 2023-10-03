import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import LoginPage from './pages/Login.jsx';
import APIPage from './pages/API.jsx';
import HomePage from './pages/Home.jsx';


const router = createBrowserRouter([
  { path: '/', element: <HomePage /> },
  { path: '/Login', element: <LoginPage /> },
  { path: '/API', element: <APIPage /> },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;