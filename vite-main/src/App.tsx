import React from 'react';
import './App.css';
import {createBrowserRouter,RouterProvider}from "react-router-dom"
import LoginWithMockAPI from "./pages/LoginWithMockAPI";
const router =createBrowserRouter([{
 path : "/",
 element :<LoginWithMockAPI/>,

}])

function App() {
  return (
    <div className="App">
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
