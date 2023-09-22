import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import LogIn from './pages/LogIn';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/login" element={<LogIn />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
