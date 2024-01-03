import { MaoYanRouteName } from '@enum/routeName';
import useEvent from '@hooks/useEvent';
import useNGDrawer from '@hooks/useNGDrawer';
import useNGNavigation from '@hooks/useNGNavigation';
import { usePositionStore } from '@store/position';
import { downArrowFull, pathMap } from '@svgs/path';
import { NGHStack, NGPressable, NGText, SvgIcon } from '@ui';
import React, { memo, useMemo } from 'react';

interface HeaderWithMenuProps {}
const HeaderWithMenu: React.FC<HeaderWithMenuProps> = () => {
  const navigation = useNGNavigation();
  const { isDrawerOpen, onToggle } = useNGDrawer();

  const city = usePositionStore((state) => state.city);

  const paths = useMemo(() => (isDrawerOpen ? pathMap.toggleLeft : pathMap.toggleRight), [isDrawerOpen]);

  const go2City = useEvent(() => {
    navigation.push(MaoYanRouteName.City, {});
  });
  return (
    <NGHStack h={46} centerV paddingLeft={16} space={3}>
      <NGPressable onPress={onToggle}>
        <SvgIcon fills={['#000']} paths={paths} size={24} />
      </NGPressable>
      <NGPressable onPress={go2City}>
        <NGHStack centerV space={1}>
          <NGText>{city.nm}</NGText>
          <SvgIcon fills={['#000']} paths={downArrowFull} size={12} />
        </NGHStack>
      </NGPressable>
    </NGHStack>
  );
};

export default memo(HeaderWithMenu);
