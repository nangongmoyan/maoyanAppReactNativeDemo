import { MaoYanRouteName } from '@enum/routeName';
import { MainNavigationProps } from '@navigation/type';
import { useNavigation } from '@react-navigation/native';

export default function useNGNavigation<T = MainNavigationProps<MaoYanRouteName>>(): T {
  const navigation = useNavigation<T>();

  return navigation as unknown as T;
}
