import { deployApi } from 'maoyan-request';

export const getAddress = async () => {
  const rlt = await deployApi.city({});
  console.log({ rlt });
};
