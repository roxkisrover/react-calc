import { cx } from '@linaria/core';
import { createRoot } from 'react-dom/client';

import { globals } from 'styles/globals';
import { colors } from 'styles/theme';

import App from './App';

const domNode = document.getElementById('root') as HTMLDivElement;
const root = createRoot(domNode);

root.render(
  <div className={cx(colors, globals)}>
    <App />
  </div>
);
