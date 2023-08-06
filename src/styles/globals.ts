import { css } from '@linaria/core';

export const globals = css`
  :global() {
    body {
      margin: 0;

      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen-Sans, Ubuntu,
        Cantarell, 'Helvetica Neue', sans-serif;
      text-size-adjust: none;
      text-rendering: optimizeLegibility;

      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }
  }
`;
