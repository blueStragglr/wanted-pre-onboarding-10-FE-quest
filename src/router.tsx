import { createBrowserRouter } from 'react-router-dom'
import Login from './components/Login.tsx'
import MockPage from './components/MockPage.tsx'
import App from './components/App.tsx'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Login />,
      },
      {
        path: 'about',
        element: <MockPage />,
      },
    ],
  },
])
