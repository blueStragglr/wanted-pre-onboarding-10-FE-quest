import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import LoginForm from './LoginForm';
import Page2 from './Page2';

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="/page2" element={<Page2 />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
