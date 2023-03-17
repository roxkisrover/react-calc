import { DefaultTheme } from 'styled-components';

export const colors = {
  green: '#79bf7e',
  greenMediumLight: '#9bCf9f',
  greenLight: '#effcef',
  orange: '#E49C01',
  orangeLight: '#fff5e0',
  orangeSecondary: '#f27825',
  orangeSecondaryLight: '#f59756',
  orangeDark: '#b27a01',
  blueDark: '#2a488a',
  blue: '#639BE5',
  blueLight: '#edf5ff',
  white: '#ffffff',
  red: '#f22525',
  dark: '#131313',
  darkBlue: '#010132',
  darkLight: '#D6DCE5',
  black: '#000000',
  gray50: '#808080',
  gray65: '#a6a6a6',
  gray70: '#b3b3b3',
  gray90: '#e2e4e5',
  gray93: '#ececec',
  gray98: '#fafafa',
  light: '#e9ecf1',
} as const;

export const theme: DefaultTheme = {
  colors,
} as const;
