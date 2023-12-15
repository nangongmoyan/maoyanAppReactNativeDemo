import React, { useEffect } from 'react';
import { StatusBar, Text, View } from 'react-native';

const Detail: React.FC<any> = () => {
  useEffect(() => {
    StatusBar.setBarStyle('dark-content', true);
  }, []);

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Detail Screen</Text>
    </View>
  );
};

export default Detail;
