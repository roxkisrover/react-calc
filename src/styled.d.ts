import 'styled-components';

import { colors } from 'styles/theme';

type TColors = {
  [key in keyof typeof colors]: (typeof colors)[key];
};

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: TColors;
  }
}
