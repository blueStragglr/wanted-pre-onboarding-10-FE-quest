import "./App.css";
import { Link, Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <div className="App">
        <header>
          <ul>
            <li>
              <Link to="/login">로그인</Link>
            </li>
            <li>
              <Link to="/api">API</Link>
            </li>
          </ul>
        </header>
      </div>
      <Outlet />
    </>
  );
}

export default App;
