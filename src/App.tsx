import { Navigate, Route, Routes } from 'react-router-dom';
import Header from './container/Header';
import LoginPage from './pages/LoginPage';
import MockPage from './pages/MockPage';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Navigate replace to="/login" />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/mock" element={<MockPage />} />
      </Routes>
    </>
  );
}

export default App;
