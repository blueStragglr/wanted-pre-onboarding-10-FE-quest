import "./App.css";
import { Link, Outlet } from "react-router-dom";

export default function App() {
  return (
    <>
      <div className="App">
        <nav>
          <ul>
            <li>
              <Link to="/login">로그인</Link>
            </li>
            <li>
              <Link to="/">홈</Link>
            </li>
            <li>
              <Link to="/response">응답</Link>
            </li>
          </ul>
        </nav>
      </div>
      <Outlet />
    </>
  );
}
