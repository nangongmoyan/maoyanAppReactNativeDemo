import React, { memo } from 'react';

interface KeyExtractorProps {
  item: any;
  index: number;
}
const KeyExtractor: React.FC<KeyExtractorProps> = ({ item: any, index: number }) => {
  return item.id ? `${item.id}_${index}` : index.toString();
};

export default memo(KeyExtractor);
