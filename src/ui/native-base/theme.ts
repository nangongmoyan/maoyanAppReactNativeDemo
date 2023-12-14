import { extendTheme } from 'native-base';

const ngTheme = extendTheme({});

export type NGThemeType = typeof ngTheme;

export default ngTheme;

declare module 'native-base' {
  interface ICustomTheme extends NGThemeType {}
}
