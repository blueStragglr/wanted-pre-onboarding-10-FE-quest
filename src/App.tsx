import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Login from './pages/Login'
import Data from './pages/ShowData'
import GlobalStyle from './GlobalStyle';

function App() {
  return (
    <div className="App">
      <GlobalStyle/>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/data' element={<Data/>}/>
      </Routes>
    </div>
  );
}

export default App;
