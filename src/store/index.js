import { create } from 'zustand';

const useFormulaStore = create((set) => ({
  formulas: 0,
  addFormula: () => set((state) => ({ formulas: state.formulas + 1 })),
  resetFormulas: () => set({ formulas: 0 }),
}));

export default useFormulaStore;
