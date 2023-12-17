import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import routerStacks from './routerStacks';
import { RootStackParamList } from './type';

const RootStack = createNativeStackNavigator<RootStackParamList>();

const RootScreen: React.FC<any> = () => {
  return (
    <RootStack.Navigator>
      <RootStack.Group>
        {routerStacks.map((routerStack) => {
          return (
            <RootStack.Screen
              {...routerStack}
              key={routerStack.name}
              options={{ headerShown: routerStack.headerShown }}
            />
          );
        })}
      </RootStack.Group>
    </RootStack.Navigator>
  );
};

export { RootScreen };
