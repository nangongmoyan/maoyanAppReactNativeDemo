import { ErrorBundary } from '@components/error/ErrorBundary';
import hoistNonReactStatic from 'hoist-non-react-statics';
import React from 'react';

function ErrorCatchHOC<T extends ComponentConstruct<any>>(child: T) {
  const Catch = (props: any) => {
    return <ErrorBundary childProps={props}>{React.createElement(child, props)}</ErrorBundary>;
  };
  hoistNonReactStatic(Catch, child);
  return Catch;
}

export default ErrorCatchHOC;
