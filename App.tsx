import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {Suspense, lazy} from 'react';
import {Text} from 'react-native';
import Main from './src/pages/main/Main';

const Stack = createNativeStackNavigator<any>();
const Home = lazy(() => import('./src/pages/tab/Home'));
const User = lazy(() => import('./src/pages/tab/User'));

const App = () => {
  return (
    <Suspense fallback={<Text>Loading...</Text>}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Main">
          <Stack.Screen name={'Main'} component={Main} />
          <Stack.Screen name={'Home'} component={Home} />
          <Stack.Screen name={'User'} component={User} />
        </Stack.Navigator>
      </NavigationContainer>
    </Suspense>
  );
};

export default App;
