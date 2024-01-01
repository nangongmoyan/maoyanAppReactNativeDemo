import globalStyle from '@styles/globalStyle';
import { NGSAView, NGVStack } from '@ui';
import React, { memo } from 'react';
import { StyleSheet } from 'react-native';

interface NGLayoutProps {}
const NGLayout: React.FC<React.PropsWithChildren<NGLayoutProps>> = ({ children }) => {
  return (
    <NGSAView style={StyleSheet.flatten([styles.flex1])}>
      <NGVStack style={StyleSheet.flatten([globalStyle.flexG1])}>{children}</NGVStack>
    </NGSAView>
  );
};

const styles = StyleSheet.create({
  flex1: {
    flex: 1,
  },
  flexG1: {
    flexGrow: 1,
  },
});
export default memo(NGLayout);
