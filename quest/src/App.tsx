import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { Login } from "./pages/Page1";
import { GetAPI } from "./pages/Page2";

function App() {
  return (
    <Router>
      <ul>
        <li>
          <Link to="/page1">Page1. 로그인</Link>
        </li>
        <li>
          <Link to="/page2">Page2. API 호출</Link>
        </li>
      </ul>

      <Routes>
        <Route path="/page1" element={<Login />} />
        <Route path="/page2" element={<GetAPI />} />
      </Routes>
    </Router>
  );
}

export default App;
