import React, { memo } from 'react';
import { useToaster } from 'react-hot-toast/headless';
import { NGVStack } from '../VStack';
import NGToastItem from './NGToastItem';

interface NGToastsProps {}
const NGToasts: React.FC<React.PropsWithChildren<NGToastsProps>> = ({ children }) => {
  const { toasts, handlers } = useToaster();
  return (
    <NGVStack flex={1}>
      {children}
      {toasts.map((toast, index) => {
        return (
          <NGToastItem
            key={index}
            toast={toast}
            offset={handlers.calculateOffset(toast, { reverseOrder: false })}
            updateHeight={(height) => handlers.updateHeight(toast.id, height)}
          />
        );
      })}
    </NGVStack>
  );
};

export default memo(NGToasts);
