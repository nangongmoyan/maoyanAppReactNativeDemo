import { NGSafeAreaView } from '@ui/index';
import { NGScrollView } from '@ui/native-base';
import React, { memo } from 'react';

interface NGLayoutProps {}
const NGLayout: React.FC<React.PropsWithChildren<NGLayoutProps>> = ({ children }) => {
  return (
    <NGSafeAreaView>
      <NGScrollView>{children}</NGScrollView>
    </NGSafeAreaView>
  );
};

export default memo(NGLayout);
