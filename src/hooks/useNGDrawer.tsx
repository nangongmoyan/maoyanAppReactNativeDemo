import { useDrawerStatus } from '@react-navigation/drawer';
import { DrawerActions } from '@react-navigation/native';
import { useCallback, useMemo } from 'react';
import useNGNavigation from './useNGNavigation';

export default function useNGDrawer() {
  const navigation = useNGNavigation();
  const drawerStatus = useDrawerStatus();

  const isDrawerOpen = useMemo(() => {
    return drawerStatus === 'open';
  }, [drawerStatus]);

  const onOpen = useCallback(() => {
    navigation.dispatch(DrawerActions.openDrawer());
  }, [navigation]);

  const onClose = useCallback(() => {
    navigation.dispatch(DrawerActions.closeDrawer());
  }, [navigation]);

  const onToggle = useCallback(() => {
    navigation.dispatch(DrawerActions.toggleDrawer());
  }, [navigation]);

  return { isDrawerOpen, onOpen, onClose, onToggle };
}
