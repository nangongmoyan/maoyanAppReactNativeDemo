/**
 * ui 样式合集
 * created by nangongmoyan on 2023.12.06
 */

import { Platform, StyleSheet } from 'react-native';

const uiStyles = StyleSheet.create({
  ShadowBoxContainer: {
    ...Platform.select({
      ios: {
        shadowColor: '#E8E8F1',
        shadowOffset: {
          width: 0,
          height: 4,
        },
        shadowOpacity: 1,
        shadowRadius: 8,
      },
      android: {
        elevation: 5,
      },
    }),
  },
});

export default uiStyles;
