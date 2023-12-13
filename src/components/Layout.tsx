import React, { memo } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { NGScrollView } from '../ui';

interface Props {}
const NGLayout: React.FC<React.PropsWithChildren<Props>> = ({ children }) => {
  return (
    <SafeAreaView>
      <NGScrollView>{children}</NGScrollView>
    </SafeAreaView>
  );
};

export default memo(NGLayout);
