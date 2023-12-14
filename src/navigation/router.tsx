import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import routerStacks from './stacks';
import { RootStackParamList } from './type';

const Stack = createNativeStackNavigator<RootStackParamList>();

const Router = () => {
  console.log({ routerStacks });
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator>
        <Stack.Group>
          {routerStacks.map((routerStack) => {
            return (
              <Stack.Screen
                {...routerStack}
                key={routerStack.name}
                options={{ headerShown: routerStack.headerShown }}
              />
            );
          })}
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
