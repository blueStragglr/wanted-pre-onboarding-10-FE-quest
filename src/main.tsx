import React from 'react';
import ReactDOM from 'react-dom/client';
import GlobalStyle from './style/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import theme from './style/theme';
import { RouterProvider } from 'react-router-dom';
import routes from './router/routes';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <RouterProvider router={routes} />
    </ThemeProvider>
  </React.StrictMode>,
);
