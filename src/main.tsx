import Router from '@navigation/router';
import { NGNativeBaseProvider } from '@ui/native-base';
import { NGQueryClientProvider, ngQueryClient } from '@utils/query';
import React, { Suspense } from 'react';
import { StatusBar, Text } from 'react-native';
import { NGSAProvider } from './ui';

const Main = () => {
  return (
    <NGSAProvider>
      <StatusBar backgroundColor="transparent" translucent />
      <NGNativeBaseProvider>
        <NGQueryClientProvider client={ngQueryClient}>
          <Suspense fallback={<Text>Loading...</Text>}>
            <Router />
          </Suspense>
        </NGQueryClientProvider>
      </NGNativeBaseProvider>
    </NGSAProvider>
  );
};

export default Main;
