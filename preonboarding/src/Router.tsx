import { BrowserRouter, Route, Routes } from "react-router-dom";
import Page1 from "./pages/page1";
import Page2 from "./pages/page2";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Page1 />} />
        <Route path="/page1" element={<Page1 />} />
        <Route path="/page2" element={<Page2 />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
