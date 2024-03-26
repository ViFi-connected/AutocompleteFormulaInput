import { create } from 'zustand';

const useQueryStore = create((set) => ({
  queries: 0,
  addQuery: () => set((state) => ({ queries: state.queries + 1 })),
  resetQueries: () => set({ queries: 0 }),
}));

export default useQueryStore;
