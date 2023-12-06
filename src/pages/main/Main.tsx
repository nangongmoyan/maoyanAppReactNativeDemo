import React from 'react';

import {Button, Text, View} from 'react-native';

const Main: React.FC<any> = ({navigation}) => {
  const handleHome = () => navigation.navigate('Home');
  const handleUser = () => navigation.navigate('User');

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Button onPress={handleHome} title="跳转到 home" color="green" />
      <View style={{height: 20}} />
      <Button onPress={handleUser} title="跳转到 BUserar" color="green" />
    </View>
  );
};

export default Main;
