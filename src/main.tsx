import React from 'react';
import ReactDOM from 'react-dom/client';
import { PageProvider } from '@/contexts/PageContext';
import App from './App.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <PageProvider>
      <App />
    </PageProvider>
  </React.StrictMode>
);
