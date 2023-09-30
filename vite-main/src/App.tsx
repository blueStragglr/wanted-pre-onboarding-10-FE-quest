import React from 'react';
import './App.css';
import {Routes,Route}from "react-router-dom"
import Header from './component/Header';
import Page1 from './page/Page1';
import Page2 from './page/Page2';
function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/" element={<Page1/>}></Route>
        <Route path="/page/2" element={<Page2/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
