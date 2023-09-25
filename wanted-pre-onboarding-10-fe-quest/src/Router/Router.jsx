import { Routes, Route } from "react-router-dom";

import Login from "../pages/Login";
import Mock from "../pages/Mock";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/mock" element={<Mock />} />
    </Routes>
  );
}
