
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './components/pages/Login';
import Header from './components/pages/Header/index';
import API from './components/pages/API/index';
import Home from './components/pages/Home/index';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/api' element={<API />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
