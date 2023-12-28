import { AppProvider } from '@context';
import Router from '@navigation/router';
import { getCitys } from '@utils/config';
import { NGQueryClientProvider, ngQueryClient } from '@utils/query';
import { isiOS } from '@utils/screen';
import React, { Suspense, useEffect } from 'react';
import { PermissionsAndroid, StatusBar, Text } from 'react-native';
import { init } from 'react-native-amap-geolocation';
import { NGNativeBaseProvider, NGSAProvider, NGToasts } from './ui';
const Main = () => {
  const initData = async () => {
    getCitys();

    if (!isiOS) {
      await PermissionsAndroid.requestMultiple([
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        PermissionsAndroid.PERMISSIONS.ACCESS_COARSE_LOCATION,
      ]);
    }

    await init({
      ios: '87e3797e37d9979a3fd597a0dcb6c580',
      android: '46e5d31f261621f155199044a45fc398',
    });

    // Geolocation.getCurrentPosition((position) => {
    //   console.log({ position });
    // });
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
            <AppProvider>
              <NGToasts>
                <Router />
              </NGToasts>
            </AppProvider>
          </Suspense>
        </NGQueryClientProvider>
      </NGNativeBaseProvider>
    </NGSAProvider>
  );
};

export default Main;
