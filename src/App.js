import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Link to="/loginPage">loginPage</Link> <br />
      <Link to="/apiPage">apiPage</Link> <br />
    </div>
  );
}

export default App;
