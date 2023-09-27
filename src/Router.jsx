import { createBrowserRouter } from "react-router-dom";
import Api from "@/pages/Api";
import Login from "@/pages/Login";
import App from "./App";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Login />,
      },
      {
        path: "api",
        element: <Api />,
      },
    ],
  },
]);

export default router;
