import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./page/Home";
import Login from "./page/Login";
import Root from "./page/Root";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "login",
        element: <Login />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
