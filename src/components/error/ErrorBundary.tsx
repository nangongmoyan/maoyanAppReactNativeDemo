import React from 'react';

type TypePageProps = { childProps: any };

export class ErrorBundary extends React.Component<
  React.PropsWithChildren<TypePageProps>,
  {
    hasError: boolean;
    occurPage: string;
  }
> {
  constructor(props: any) {
    super(props);
    this.state = {
      /** 出现的页面 */
      occurPage: '',
      /** 存在错误 */
      hasError: false,
    };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
    let content = '';
    content = `<=== Javascript Exception ===>
    Occurrence in page: 
    Happened at: ${this.props.type}
    <=== Javascript Error ===>
    ${error.message}
    <=== Javascript Stack ===>
    ${errorInfo.componentStack}`;

    console.log({ content });

    /** 下面可以将错误进行上报 */
  }

  retry() {
    this.setState((_) => ({ hasError: false, occurPage: '' }));
  }

  render(): React.ReactNode {
    if (this.state.hasError) {
      return null;
    }

    return <React.Fragment>{this.props.children}</React.Fragment>;
  }
}
