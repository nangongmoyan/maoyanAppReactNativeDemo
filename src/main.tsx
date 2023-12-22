import Router from '@navigation/router';
import { getCitys } from '@utils/config';
import { NGQueryClientProvider, ngQueryClient } from '@utils/query';
import React, { Suspense, useEffect } from 'react';
import { StatusBar, Text } from 'react-native';
import { NGNativeBaseProvider, NGSAProvider, NGToasts } from './ui';
const Main = () => {
  const initData = async () => {
    getCitys();
    // toast.success('xxxxx');
    // getPopularCitys();
  };

  useEffect(() => {
    initData();
  }, []);

  return (
    <NGSAProvider>
      <StatusBar backgroundColor="transparent" translucent barStyle={'dark-content'} />
      <NGNativeBaseProvider>
        <NGQueryClientProvider client={ngQueryClient}>
          <NGToasts>
            <Suspense fallback={<Text>Loading...</Text>}>
              <Router />
            </Suspense>
          </NGToasts>
        </NGQueryClientProvider>
      </NGNativeBaseProvider>
    </NGSAProvider>
  );
};

export default Main;
