import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "../pages/login";
import Mock from "../pages/mock";

const Body = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/mock" element={<Mock />} />
      </Routes>
    </Router>
  );
};

export default Body;
