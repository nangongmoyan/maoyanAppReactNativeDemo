import React, { memo } from 'react';
import { NGText } from '../Text';

interface EndProps {}
const End: React.FC<EndProps> = () => {
  return <NGText>到底了</NGText>;
};

export default memo(End);
