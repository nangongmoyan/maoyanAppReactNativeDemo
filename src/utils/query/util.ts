import { get } from 'lodash';
// 将 data.pages 合成一维数组，方便列表渲染使用
export const flattenData = <TData = any>(data?: TData | undefined, key?: string) => {
  if (!data) return undefined;

  const pages = data?.pages ?? [];
  if (pages?.length === 0) return undefined;

  return pages.reduce((prev, curr) => {
    let list = get(curr, key, []);
    return prev.concat(list);
  }, []);
};
