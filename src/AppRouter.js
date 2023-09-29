import { Route, Routes } from 'react-router-dom';
import FirstPage from './page/FirstPage';
import SecondPage from './page/SecondPage';
import Home from './page/Home';

const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/first" element={<FirstPage />} />
        <Route path="/second" element={<SecondPage />} />
      </Routes>
    </>
  );
};
export default AppRouter;
