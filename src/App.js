import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Main from "./components/Main";
import Login from "./components/Login";
import Mock from "./components/Mock";

function App() {
  const defaultTheme = createTheme({
    typography: {
      fontFamily: "Jua",
    },
  });
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/login" element={<Login />} />
          <Route path="/mock" element={<Mock />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
