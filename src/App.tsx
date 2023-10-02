import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Root from "./pages/Root";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Menu from "./components/Menu";

const router = createBrowserRouter([
  { 
    path: "/", 
    element: <Root />,
    children: [
      { index: true, element: <Home /> },
      { path: "/login", element: <Login /> },
      { path: "/menu", element: <Menu /> }
    ] 
  },
])

export default function App() {
  return (
   <RouterProvider router={router} />
  )
}
