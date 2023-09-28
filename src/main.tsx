import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import Router from './components/Router';
import Routes from './components/Routes';
import Route from './components/Route';
import Contents from './components/Contents';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" component={<App />} />
        <Route path="/contents" component={<Contents />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
