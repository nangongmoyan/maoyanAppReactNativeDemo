import Router from '@navigation/router';
import { NGQueryClientProvider, ngQueryClient } from '@utils/query';
import React, { Suspense } from 'react';
import { Text } from 'react-native';

const Main1 = () => {
  return (
    <NGQueryClientProvider client={ngQueryClient}>
      <Suspense fallback={<Text>Loading...</Text>}>
        <Router />
      </Suspense>
    </NGQueryClientProvider>
  );
};

export default Main1;
