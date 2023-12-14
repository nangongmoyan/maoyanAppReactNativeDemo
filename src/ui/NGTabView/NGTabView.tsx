import { usePrevious } from 'ahooks';
import React, { memo, useCallback, useEffect, useMemo, useState } from 'react';
import { useWindowDimensions } from 'react-native';
import { NavigationState, SceneRendererProps, TabView } from 'react-native-tab-view';

interface Route {
  key: string;
  title: string;
  serial: number;
  scene: {
    props?: any;
    component: React.FC<any>;
  };
}
type RouteMap = Pick<Route, 'key' | 'title' | 'serial'>;

interface Props {
  /** */
  routes: Route[];
  /** */
  tabIndex?: number;
  renderTabBar?: (props: any) => React.ReactNode;
  tabbarProps?: any;
  showIndicator?: boolean;
  onTabIndexChange?: (index: number) => void;
}

const NGTabView: React.FC<Props> = ({
  routes,
  // renderTabBar,
  tabIndex = 0,
  // showIndicator,
  // tabbarProps = {},
  onTabIndexChange,
  ...props
}) => {
  const layout = useWindowDimensions();
  const [routeState, setRouteState] = useState<NavigationState<RouteMap>>({ index: tabIndex, routes: [] });

  const { routeMap, renderScene } = useMemo(() => {
    const routeNGMap: RouteMap[] = routes.map((route, index) => ({
      title: route.title,
      key: route.key || index.toString(),
      serial: route.serial || index,
    }));

    const sceneMap = routes.reduce(
      (prev, current) => {
        prev[current.key] = current.scene;
        return prev;
      },
      {} as { [key in string]: { component: React.FC<any>; props?: any } },
    );

    const renderNGScene = ({ route }: SceneRendererProps & { route: RouteMap }) => {
      const scene = sceneMap?.[route.key];

      if (!scene) return null;
      const isFocused = route.serial === routeState.index;
      return React.createElement(scene.component, { ...scene?.props, isFocused });
    };
    return { routeMap: routeNGMap, renderScene: renderNGScene };
  }, [routes, routeState]);

  const prevRouteMap = usePrevious(routeMap);

  useEffect(() => {
    if (routeMap.length > 0 && routeMap.length !== prevRouteMap?.length) {
      setRouteState({ index: tabIndex, routes: routeMap });
    }
  }, [routeMap, prevRouteMap, tabIndex]);

  // const renderNGTabBar = useCallback(
  //   (props) => {
  //     if (renderTabBar) {
  //       return renderTabBar(props);
  //     } else {
  //       const barProps = {
  //         ...props,
  //         ...tabbarProps,
  //         showIndicator,
  //       };
  //       return <SKTabBar {...barProps} />;
  //     }
  //   },
  //   [renderTabBar, showIndicator, tabbarProps],
  // );

  const onIndexChange = useCallback(
    (index: number) => {
      setRouteState((prevRouteState) => ({ ...prevRouteState, index }));
      onTabIndexChange?.(index);
    },
    [onTabIndexChange],
  );

  return (
    <TabView
      lazy
      renderScene={renderScene}
      navigationState={routeState}
      onIndexChange={onIndexChange}
      // renderTabBar={renderNGTabBar}
      initialLayout={{ width: layout.width, height: 0 }}
      {...props}
    />
  );
};

export default memo(NGTabView);
