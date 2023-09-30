import React from 'react';
import ReactDOM from 'react-dom/client';
import GlobalStyle from './style/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import theme from './style/theme';
import { RouterProvider } from 'react-router-dom';
import routes from './router/routes';
import { ModalProvider } from './common/components/Modal';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <ModalProvider>
        <RouterProvider router={routes} />
      </ModalProvider>
    </ThemeProvider>
  </React.StrictMode>,
);
