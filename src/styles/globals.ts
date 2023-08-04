import { css } from '@linaria/core';

export const globals = css`
  :global() {
    body {
      margin: 0;

      font-family: Roboto, 'Helvetica Neue', sans-serif;
      text-size-adjust: none;
      text-rendering: optimizeLegibility;

      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }
  }
`;
