import { create } from 'zustand';

// const withImmer =
//   <T extends State>(config: StateCreator<T, (fn: (draft: Draft<T>) => void) => void>): StateCreator<T> =>
//   (set, get, api) =>
//     config((fn) => set(produce<T>(fn)), get, api);

export const createStore = create;
