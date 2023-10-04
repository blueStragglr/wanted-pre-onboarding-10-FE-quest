import "@/global.css";

import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import LoginPage from "@/pages/LoginPage";
import MockPage from "./pages/MockPage";
import MoviePage from "./pages/MoviePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage />,
  },
  {
    path: "/mock",
    element: <MockPage />,
  },
  {
    path: "/movie",
    element: <MoviePage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
