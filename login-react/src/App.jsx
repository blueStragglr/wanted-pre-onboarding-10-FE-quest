import { Route, Routes } from "react-router-dom";

import LoginPage from "./LoginPage";
import MockPage from "./MockPage";
import Nav from "./Nav";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Nav />}>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/mock" element={<MockPage />} />
      </Route>
    </Routes>
  );
}

export default App;
