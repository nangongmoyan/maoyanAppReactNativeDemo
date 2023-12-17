import { NativeBaseProvider } from 'native-base';
import React from 'react';
import ngTheme from './theme';

interface NGNativeBaseProviderProps {}

const config = {
  // dependencies: {
  //   // 'linear-gradient': require('react-native-linear-gradient').default,
  // },
};

const NGNativeBaseProvider: React.FC<React.PropsWithChildren<NGNativeBaseProviderProps>> = ({ children }) => {
  return (
    <NativeBaseProvider config={config} theme={ngTheme}>
      {children}
    </NativeBaseProvider>
  );
};

export default NGNativeBaseProvider;
// export { NGNativeBaseProvider };
