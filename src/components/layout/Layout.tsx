import globalStyle from '@styles/globalStyle';
import { NGSAView, NGScrollView } from '@ui';
import React, { memo } from 'react';
import { StyleSheet } from 'react-native';

interface NGLayoutProps {
  /** 是否能滚动 */
  scrollEnabled?: boolean;
}
const NGLayout: React.FC<React.PropsWithChildren<NGLayoutProps>> = ({ scrollEnabled, children }) => {
  return (
    <NGSAView style={StyleSheet.flatten([styles.flex1])}>
      <NGScrollView
        scrollEnabled={scrollEnabled}
        style={StyleSheet.flatten([globalStyle.flex1])}
        contentContainerStyle={StyleSheet.flatten([globalStyle.flexG1])}
      >
        {children}
      </NGScrollView>
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
