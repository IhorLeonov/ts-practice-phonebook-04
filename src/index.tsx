import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/app/App';
import { ThemeProvider } from 'styled-components';
import { theme } from 'constants/Theme';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
