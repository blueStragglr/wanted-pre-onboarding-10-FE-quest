import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import Pokemon from './Pokemon.tsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/pokemon' element={<Pokemon />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
