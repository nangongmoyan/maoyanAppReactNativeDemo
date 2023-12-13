import { InfiniteData } from '@tanstack/react-query';
import { get } from 'lodash';
// 将 data.pages 合成一维数组，方便列表渲染使用
export const flattenData = <TData = any>(data: InfiniteData<TData> | undefined, key: string) => {
  if (!data) return undefined;
  return data.pages.reduce((prev, curr) => {
    let list = get(curr, key, []);
    return prev.concat(list);
  }, []);
};
