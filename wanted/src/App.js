import AccountPage from "./AccountPage";
import MockPage from "./MockPage";
import { Routes, Route, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* 웹 서비스 소개 페이지 */}
        <Route path="/" element={<AccountPage />} />
        {/* <SignIn /> */}
        <Route path="/mock" element={<MockPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
