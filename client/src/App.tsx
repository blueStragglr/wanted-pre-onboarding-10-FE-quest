import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Menu from "./components/Menu";
import GeneralLayout from "./layout/GeneralLayout";
import AuthLayout from "./layout/AuthLayout";

interface RouterElement {
  id: number,
  path: string,
  label: string,
  element: React.ReactNode,
  withAuth: boolean
}

const routerData: RouterElement[] = [
  {
    id: 0,
    path: "/",
    label: "Home",
    element: <Home />,
    withAuth: false
  },
  {
    id: 1,
    path: "/login",
    label: "Login",
    element: <Login />,
    withAuth: false
  },
  {
    id: 2,
    path: "/menu",
    label: "Menu",
    element: <Menu />,
    withAuth: true
  },
]

const routers = createBrowserRouter(
  routerData.map((router) => {
    if (router.withAuth) {
      return {
        path: router.path,
        element: <AuthLayout>{router.element}</AuthLayout>
      }
    } else {
      return {
        path: router.path,
        element: <GeneralLayout>{router.element}</GeneralLayout>
      }
    }
  })
)

export default function App() {
  return (
   <RouterProvider router={routers} />
  )
}
