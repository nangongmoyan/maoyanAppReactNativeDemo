import { NGScrollView } from '@ui/native-base';
import React, { memo } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

interface NGLayoutProps {}
const NGLayout: React.FC<React.PropsWithChildren<NGLayoutProps>> = ({ children }) => {
  return (
    <SafeAreaView>
      <NGScrollView>{children}</NGScrollView>
    </SafeAreaView>
  );
};

export default memo(NGLayout);
