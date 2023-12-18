import useNGDrawer from '@hooks/useNGDrawer';
import { pathMap } from '@svgs/path';
import { NGHStack, NGPressable, SvgIcon } from '@ui';
import React, { memo, useMemo } from 'react';

interface HeaderWithMenuProps {}
const HeaderWithMenu: React.FC<HeaderWithMenuProps> = () => {
  const { isDrawerOpen, onToggle } = useNGDrawer();

  const paths = useMemo(() => (isDrawerOpen ? pathMap.toggleLeft : pathMap.toggleRight), [isDrawerOpen]);

  return (
    <NGHStack h={46} centerV paddingLeft={16}>
      <NGPressable onPress={onToggle}>
        <SvgIcon fills={['#000']} paths={paths} size={24} />
      </NGPressable>
    </NGHStack>
  );
};

export default memo(HeaderWithMenu);
