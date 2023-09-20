// React
import { Routes, Route } from "react-router-dom";

// Pages
import Home from "./Home";
import LoginPage from "./Login";
import MockPage from "./Mock";

export default function Router() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/mock" element={<MockPage />} />
      <Route path="/*" element={<Home />} />
    </Routes>
  );
}
