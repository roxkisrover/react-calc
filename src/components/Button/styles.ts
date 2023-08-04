import { css } from '@linaria/core';

export const button = css`
  cursor: pointer;
  user-select: none;

  display: block;

  width: 80px;
  height: 64px;
  padding: 0;

  font-weight: 300;
  line-height: 64px;
  text-align: center;

  border-top: 1px solid var(--color-dark-charcoal);
  border-right: 1px solid var(--color-dark-charcoal);
  border-bottom: 0;
  border-left: 0;
  outline: none;

  -webkit-tap-highlight-color: rgb(0 0 0 / 50%);
`;

export const func = css`
  font-size: 1.75em;
  color: var(--color-platinum);
  background-color: var(--color-arsenic);

  &:active {
    color: var(--color-platinum);
    background-color: var(--color-granite-gray);
  }
`;

export const digit = css`
  font-size: 2em;
  color: var(--color-platinum);
  background-color: var(--color-granite-gray);

  &:active {
    color: var(--color-ghost-white);
    background-color: var(--color-quicksilver);
  }
`;

export const operator = css`
  font-size: 2.75em;
  color: var(--color-corn-silk);
  background-color: var(--color-deep-saffron);
  border-right: 0;

  &:last-child {
    border-bottom-right-radius: 10px;
  }

  &:active {
    color: var(--color-seashell);
    background-color: var(--color-ochre);
  }
`;

export const zero = css`
  width: 160px;
  padding-left: 32px;

  font-size: 2em;
  color: var(--color-platinum);
  text-align: left;

  background-color: var(--color-granite-gray);
  border-bottom-left-radius: 10px;

  &:active {
    color: var(--color-ghost-white);
    background-color: var(--color-quicksilver);
  }
`;

export const dot = css`
  font-size: 2.75em;
  color: var(--color-platinum);
  background-color: var(--color-granite-gray);

  &:active {
    color: var(--color-ghost-white);
    background-color: var(--color-quicksilver);
  }
`;
