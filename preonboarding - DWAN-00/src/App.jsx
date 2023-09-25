import "./index.css";
import React from "react";
import Header from "./components/common/Header";
import LoginForm from "./components/login/LoginForm";
import Main from "./components/main/Main";
import SignUpForm from "./components/signup/SignUpForm";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header>
          <Header />
        </header>
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/login" element={<LoginForm />} />
          <Route path="/signup" element={<SignUpForm />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
