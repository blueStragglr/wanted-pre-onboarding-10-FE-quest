import { Routes, Route } from "react-router-dom";
import Login from "./Login";
import Mock from "./Mock";
import "./index.css";
import NavBar from "./NavBar";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/mock" element={<Mock />} />
      </Routes>
    </>
  );
}

export default App;
