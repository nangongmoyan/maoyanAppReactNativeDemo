import { operationCurrentCity } from '@utils/config';
import React, { useContext, useMemo } from 'react';

const AppContext = React.createContext<MaoYanContext.AppContext>({});

export const AppProvider: React.FC<React.PropsWithChildren<{}>> = ({ children, ...restProps }) => {
  const { getCurrentCity } = operationCurrentCity();

  const currentCity = useMemo(() => getCurrentCity(), [getCurrentCity]);

  const value = useMemo(
    () => ({
      ...restProps,
      currentCity,
    }),
    [currentCity, restProps],
  );
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const useAppContext = () => {
  return useContext(AppContext);
};
