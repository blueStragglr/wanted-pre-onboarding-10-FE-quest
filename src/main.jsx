import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { Global, ThemeProvider } from "@emotion/react";
import { theme } from "./assets/theme.js";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <App />
        <Global />
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
