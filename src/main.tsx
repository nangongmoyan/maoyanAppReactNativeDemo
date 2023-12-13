import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NGQueryClientProvider, ngQueryClient } from '@utils/query';
import React, { Suspense, lazy } from 'react';
import { Text } from 'react-native';

const Stack = createNativeStackNavigator<any>();
const Home = lazy(() => import('./pages/tab/Home'));
const User = lazy(() => import('./pages/tab/User'));

const Main = () => {
  return (
    <NGQueryClientProvider client={ngQueryClient}>
      <Suspense fallback={<Text>Loading...</Text>}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Main">
            <Stack.Screen name={'Main'} component={Main} />
            <Stack.Screen name={'Home'} component={Home} />
            <Stack.Screen name={'User'} component={User} />
          </Stack.Navigator>
        </NavigationContainer>
      </Suspense>
    </NGQueryClientProvider>
  );
};

export default Main;
