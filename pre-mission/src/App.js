import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import LogIn from './pages/LogIn';
import ShowAPI from './pages/ShowAPI';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/login" element={<LogIn />}/>
          <Route path="showAPI" element={<ShowAPI />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
