import { Routes, Route, BrowserRouter } from "react-router-dom";
import Main from "./page/Main";
import Api from "./page/Api";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/api" element={<Api />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
