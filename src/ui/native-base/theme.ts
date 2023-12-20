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
    10: 10,
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
