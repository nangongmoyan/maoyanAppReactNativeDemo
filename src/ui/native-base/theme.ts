import { extendTheme } from 'native-base';

const ngTheme = extendTheme({
  colors: {
    white: {
      default: '#FFF',
      F5: '#F5F5F5',
    },
    sizes: {
      16: 16,
      46: 46,
    },
    space: {
      16: 16,
      46: 46,
    },
    shadows: {},
  },
});

export type NGThemeType = typeof ngTheme;

export default ngTheme;

declare module 'native-base' {
  interface ICustomTheme extends NGThemeType {}
}
