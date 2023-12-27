import { extendTheme } from 'native-base';

const ngTheme = extendTheme({
  colors: {
    white: {
      default: '#FFF',
      F5: '#F5F5F5',
    },
  },
  sizes: {
    20: 20,
    46: 46,
  },
  space: {
    5: 5,
    6: 6,
    8: 8,
    10: 10,
    12: 12,
    14: 14,
    16: 16,
    46: 46,
  },
  shadows: {},
});

export type NGThemeType = typeof ngTheme;

export default ngTheme;

declare module 'native-base' {
  interface ICustomTheme extends NGThemeType {}
}
