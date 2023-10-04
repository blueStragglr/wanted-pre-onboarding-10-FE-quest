import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./pages/Login";
import MockApi from "./pages/MockApi";
import Header from "./components/Header";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Header>
        <Login />
      </Header>
    ),
  },
  {
    path: "/mock",
    element: (
      <Header>
        <MockApi />
      </Header>
    ),
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
