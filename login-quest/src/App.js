import "./App.css";
import { Routes, Route } from "react-router-dom";
import Main from "./Page/Main";
import Page1 from "./Page/Page1";
import Page2 from "./Page/Page2";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/page1" element={<Page1 />}></Route>
        <Route path="/page2" element={<Page2 />}></Route>
      </Routes>
    </>
  );
}

export default App;
