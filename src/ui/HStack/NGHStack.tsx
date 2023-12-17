import { HStack } from 'native-base';
import { IHStackProps } from 'native-base/lib/typescript/components/primitives/Stack/HStack';
import React, { memo, useMemo } from 'react';
interface NGHStackProps extends IHStackProps {
  /** 横向居中 */
  centerH?: boolean;
  /** 纵向居中 */
  centerV?: boolean;
}

const NGHStack: React.FC<React.PropsWithChildren<NGHStackProps>> = ({ centerH, centerV, children, ...props }) => {
  const restProps = useMemo(() => {
    const rest = props;
    centerV && Object.assign(rest, { alignItems: 'center' });
    centerH && Object.assign(rest, { justifyContent: 'center' });
    return rest;
  }, [centerH, centerV, props]);

  return <HStack {...restProps}>{children}</HStack>;
};

export default memo(NGHStack);
