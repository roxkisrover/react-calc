import styled, { css, DefaultTheme } from 'styled-components';

import { BUTTON_VARIANTS } from './constants';

const variantStyles = (theme: DefaultTheme, variant: BUTTON_VARIANTS) =>
  ({
    [BUTTON_VARIANTS.FUNC]: css`
      color: #e2e2e2;
      font-size: 1.75em;
      background: #404243;

      &:active {
        color: #e7e7e7;
        background: #616163;
      }
    `,
    [BUTTON_VARIANTS.DIGIT]: css`
      color: #e7e7e7;
      font-size: 2em;
      background: #616163;

      &:active {
        color: #f9f9f9;
        background: #a3a4a4;
      }
    `,
    [BUTTON_VARIANTS.OPERATOR]: css`
      color: #fff0df;
      font-size: 2.75em;
      background: #fd9e2b;
      border-right: 0;

      &:last-child {
        border-bottom-right-radius: 10px;
      }

      &:active {
        color: #fbf6ef;
        background: #c97d20;
      }
    `,
    [BUTTON_VARIANTS.ZERO]: css`
      color: #e7e7e7;
      background: #616163;
      width: 160px;
      padding-left: 32px;
      font-size: 2em;
      text-align: left;
      border-bottom-left-radius: 10px;

      &:active {
        color: #f9f9f9;
        background: #a3a4a4;
      }
    `,
    [BUTTON_VARIANTS.DOT]: css`
      color: #e7e7e7;
      background: #616163;
      font-size: 2.75em;

      &:active {
        color: #f9f9f9;
        background: #a3a4a4;
      }
    `,
  }[variant]);

export const Button = styled.button<{ variant: BUTTON_VARIANTS }>`
  display: block;
  width: 80px;
  height: 64px;
  padding: 0;
  font-weight: 300;
  line-height: 64px;
  text-align: center;
  border-top: 1px solid #2c2f30;
  border-right: 1px solid #2c2f30;
  border-bottom: 0;
  border-left: 0;
  outline: none;
  cursor: pointer;
  user-select: none;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0.5);

  ${({ theme, variant }) => variantStyles(theme, variant)}
`;
