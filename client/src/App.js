import logo from "./logo.svg";
import "./App.css";
import Login from "./components/Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Mock from "./components/Mock";
import Navigation from "./components/Navigation";

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <a
            className="App-link"
            href="https://www.wanted.co.kr/events/pre_challenge_fe_14"
            target="_blank"
            rel="noopener noreferrer"
          >
            Pre_Challenge_FE
          </a>
          <Navigation />
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/mock" element={<Mock />} />
          </Routes>
        </header>
      </div>
    </Router>
  );
}

export default App;
