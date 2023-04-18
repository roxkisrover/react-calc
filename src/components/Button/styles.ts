import styled, { css, DefaultTheme } from 'styled-components';

import { BUTTON_VARIANTS } from './constants';

const variantStyles = (theme: DefaultTheme, variant: BUTTON_VARIANTS) =>
  ({
    [BUTTON_VARIANTS.FUNC]: css`
      font-size: 1.75em;
      color: ${({ theme }) => theme.colors.platinum};
      background: ${({ theme }) => theme.colors.arsenic};

      &:active {
        color: ${({ theme }) => theme.colors.platinum};
        background: ${({ theme }) => theme.colors.graniteGray};
      }
    `,
    [BUTTON_VARIANTS.DIGIT]: css`
      font-size: 2em;
      color: ${({ theme }) => theme.colors.platinum};
      background: ${({ theme }) => theme.colors.graniteGray};

      &:active {
        color: ${({ theme }) => theme.colors.ghostWhite};
        background: ${({ theme }) => theme.colors.quickSilver};
      }
    `,
    [BUTTON_VARIANTS.OPERATOR]: css`
      font-size: 2.75em;
      color: ${({ theme }) => theme.colors.cornsilk};
      background: ${({ theme }) => theme.colors.deepSaffron};
      border-right: 0;

      &:last-child {
        border-bottom-right-radius: 10px;
      }

      &:active {
        color: ${({ theme }) => theme.colors.seashell};
        background: ${({ theme }) => theme.colors.ochre};
      }
    `,
    [BUTTON_VARIANTS.ZERO]: css`
      width: 160px;
      padding-left: 32px;

      font-size: 2em;
      color: ${({ theme }) => theme.colors.platinum};
      text-align: left;

      background: ${({ theme }) => theme.colors.graniteGray};
      border-bottom-left-radius: 10px;

      &:active {
        color: ${({ theme }) => theme.colors.ghostWhite};
        background: ${({ theme }) => theme.colors.quickSilver};
      }
    `,
    [BUTTON_VARIANTS.DOT]: css`
      font-size: 2.75em;
      color: ${({ theme }) => theme.colors.platinum};
      background: ${({ theme }) => theme.colors.graniteGray};

      &:active {
        color: ${({ theme }) => theme.colors.ghostWhite};
        background: ${({ theme }) => theme.colors.quickSilver};
      }
    `,
  }[variant]);

export const Button = styled.button<{ variant: BUTTON_VARIANTS }>`
  cursor: pointer;
  user-select: none;

  display: block;

  width: 80px;
  height: 64px;
  padding: 0;

  font-weight: 300;
  line-height: 64px;
  text-align: center;

  border-top: 1px solid ${({ theme }) => theme.colors.darkCharcoal};
  border-right: 1px solid ${({ theme }) => theme.colors.darkCharcoal};
  border-bottom: 0;
  border-left: 0;
  outline: none;

  -webkit-tap-highlight-color: rgb(0 0 0 / 50%);

  ${({ theme, variant }) => variantStyles(theme, variant)}
`;
