import { Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import MockAPIResult from "./components/MockAPIResult";
import Link from "@mui/material/Link";
import Breadcrumbs from "@mui/material/Breadcrumbs";

import { createTheme, ThemeProvider } from "@mui/material/styles";

function App() {
  const defaultTheme = createTheme();

  return (
    <ThemeProvider theme={defaultTheme}>
      <Breadcrumbs
        aria-label="breadcrumb"
        sx={{ border: 1, borderRadius: 1, margin: 2, padding: 2 }}
      >
        <Link underline="hover" color="inherit" href="/">
          Login
        </Link>
        <Link underline="hover" color="inherit" href="/mock-api">
          Mock API
        </Link>
      </Breadcrumbs>

      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/mock-api" element={<MockAPIResult />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
