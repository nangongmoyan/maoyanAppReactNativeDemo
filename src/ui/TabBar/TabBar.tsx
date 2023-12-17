import React, { memo, useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { StyleSheet, Text, ViewStyle } from 'react-native';
import { TabBar } from 'react-native-tab-view';
interface NGTabBarProps {
  tabWidth?: number;
  style?: ViewStyle;
  showIndicator?: boolean;
  indicatorWidth?: number;
  activeTintColor?: string;
  inactiveTintColor?: string;
  indicatorStyle?: ViewStyle;
  activeTextStyle?: ViewStyle;
  inactiveTextStyle?: ViewStyle;
}

const FONT_COLOR = '#585865';
const FOCUS_FONT_COLOR = 'rgba(0, 0, 0, .85)';

const NGTabBar: React.FC<NGTabBarProps> = ({
  style = {},
  tabWidth = 90,
  indicatorStyle = {},
  indicatorWidth = 12,
  // activeTextStyle = {},
  showIndicator = false,
  // inactiveTextStyle = {},
  inactiveTintColor = FONT_COLOR,
  activeTintColor = FOCUS_FONT_COLOR,
  ...props
}) => {
  const { t } = useTranslation();

  const indicatorLeft = useMemo(() => {
    return Math.floor(tabWidth / 2 - indicatorWidth / 2 - 1);
  }, [tabWidth, indicatorWidth]);

  const renderLabel = useCallback(({ route, focused, color }) => {
    return <Text>{route.title}</Text>;
    // return (
    //   <SKText
    //     color={color}
    //     fontSize={14}
    //     lineHeight={22}
    //     numberOfLines={1}
    //     fontWeight={focused ? 'bold' : 'medium'}
    //     style={focused ? activeTextStyle : inactiveTextStyle}
    //   >
    //     {route.title}
    //   </SKText>
    // );
  }, []);
  return (
    <TabBar
      renderLabel={renderLabel}
      activeColor={activeTintColor}
      tabStyle={{ width: tabWidth }}
      inactiveColor={inactiveTintColor}
      style={[styles.container, style]}
      indicatorStyle={[
        {
          width: indicatorWidth,
          marginLeft: indicatorLeft,
          backgroundColor: showIndicator ? FOCUS_FONT_COLOR : 'transparent',
        },
        indicatorStyle,
      ]}
      {...props}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    height: 44,
    elevation: 0,
    shadowColor: '#FFF',
    backgroundColor: '#FFF',
  },
  indicator: {
    height: 4,
    borderRadius: 2,
  },
});
export default memo(NGTabBar);
