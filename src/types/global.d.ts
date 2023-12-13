declare global {
  declare module 'native-base' {
    interface ICustomTheme extends NGThemeType {}
  }
  /** 常用的组件构造类型 */
  type ComponentConstruct<T> = React.FunctionComponent<T> | React.ComponentClass<T>;
}

/* eslint-disable prettier/prettier */
export { };

