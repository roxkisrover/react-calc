import { createRoot } from 'react-dom/client';
import { ThemeProvider } from 'styled-components';

import { GlobalStyles } from 'styles/globalStyles';
import { theme } from 'styles/theme';

import App from './App';

const domNode = document.getElementById('root') as HTMLDivElement;
const root = createRoot(domNode);

root.render(
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    <App />
  </ThemeProvider>
);
