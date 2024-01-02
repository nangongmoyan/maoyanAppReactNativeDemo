import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { NGHStack } from '../HStack';
import { NGText } from '../Text';

interface UpLoadingProps {}
const UpLoading: React.FC<UpLoadingProps> = () => {
  const { t } = useTranslation();
  return (
    <NGHStack>
      <NGText>加载更多</NGText>
    </NGHStack>
  );
};

export default memo(UpLoading);
