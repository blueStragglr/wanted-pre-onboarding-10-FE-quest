import { createBrowserRouter } from "react-router-dom";
import { HomePage } from "@Pages/home";
import { Page1 } from "./page1/Page1";
import { Page2 } from "@Pages/page2";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "page1",
    element: <Page1 />,
  },
  {
    path: "page2",
    element: <Page2 />,
  },
]);
