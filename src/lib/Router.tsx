import { createBrowserRouter } from "react-router-dom";
import App from "@/App";
import SignIn from "@/pages/SignIn";
import Result from "@/pages/Result";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Result /> },
      {
        path: "signIn",
        element: <SignIn />,
      },
    ],
  },
]);
export default router;
