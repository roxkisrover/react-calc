import { DefaultTheme } from 'styled-components';

export const colors = {
  arsenic: '#404243',
  cornsilk: '#fff0df',
  darkCharcoal: '#2c2f30',
  deepSaffron: '#fd9e2b',
  ghostWhite: '#f9f9f9',
  graniteGray: '#616163',
  ochre: '#c97d20',
  platinum: '#e7e7e7',
  quickSilver: '#a3a4a4',
  seashell: '#fbf6ef',
  white: '#ffffff',
} as const;

export const theme: DefaultTheme = {
  colors,
} as const;
