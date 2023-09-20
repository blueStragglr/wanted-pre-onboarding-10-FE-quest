import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/screens/Login";
import Home from "./components/screens/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
