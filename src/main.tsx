import Router from '@navigation/router';
import { getCitys, getPopularCitys } from '@utils/config';
import { NGQueryClientProvider, ngQueryClient } from '@utils/query';
import React, { Suspense, useEffect } from 'react';
import { StatusBar, Text } from 'react-native';
import { NGNativeBaseProvider, NGSAProvider } from './ui';

const Main = () => {
  const initData = async () => {
    getCitys();
    getPopularCitys();
  };

  useEffect(() => {
    initData();
  }, []);

  return (
    <NGSAProvider>
      <StatusBar backgroundColor="transparent" translucent barStyle={'dark-content'} />
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
