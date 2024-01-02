declare global {
  /** */
  type TAnyFunc<P extends any[] = any[], T extends any = any> = (...args: P) => T;
  /** 常用的组件构造类型 */
  type ComponentConstruct<T> = React.FunctionComponent<T> | React.ComponentClass<T>;
  /** */
  type FlexAlign = 'flex-start' | 'flex-end' | 'center' | 'stretch' | 'baseline';

  // type NetworkStatus = 'initLoading' | 'refreshing' | 'loadingMore' | 'success' | 'error' | 'idle';
}

/* eslint-disable prettier/prettier */
export { };

