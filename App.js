import './App.css';
import Login from "./pages/Login";
import Data from "./pages/Data";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Login />}/>
      <Route path='/data' element={<Data />}/>
    </Routes>
    </>
  );
}

export default App;
