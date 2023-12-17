import { VStack } from 'native-base';
import { IVStackProps } from 'native-base/lib/typescript/components/primitives/Stack/VStack';
import React, { memo, useMemo } from 'react';

interface NGVStack extends IVStackProps {
  /** 横向居中 */
  centerH?: boolean;
  /** 纵向居中 */
  centerV?: boolean;
}
const NGVStack: React.FC<React.PropsWithChildren<NGVStack>> = ({ centerH, centerV, children, ...props }) => {
  const restProps = useMemo(() => {
    const rest = props;
    centerV && Object.assign(rest, { alignItems: 'center' });
    centerH && Object.assign(rest, { justifyContent: 'center' });
    return rest;
  }, [centerH, centerV, props]);

  return <VStack {...restProps}>{children}</VStack>;
};

export default memo(NGVStack);
