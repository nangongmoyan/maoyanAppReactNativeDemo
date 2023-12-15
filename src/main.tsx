import Router from '@navigation/router';
import { NGNativeBaseProvider } from '@ui/native-base';
import { NGQueryClientProvider, ngQueryClient } from '@utils/query';
import React, { Suspense } from 'react';
import { StatusBar, Text } from 'react-native';
import { NGSafeAreaProvider } from './ui';

const Main = () => {
  return (
    <NGSafeAreaProvider>
      <StatusBar backgroundColor="transparent" translucent />
      <NGNativeBaseProvider>
        <NGQueryClientProvider client={ngQueryClient}>
          <Suspense fallback={<Text>Loading...</Text>}>
            <Router />
          </Suspense>
        </NGQueryClientProvider>
      </NGNativeBaseProvider>
    </NGSafeAreaProvider>
  );
};

export default Main;
