'use client';

import useFormulaStore from '@/store';

export default function Controls() {
  const addFormula = useFormulaStore((state) => state.addFormula);
  const resetFormulas = useFormulaStore((state) => state.resetFormulas);
  return (
    <div className="flex flex-row gap-5 m-5">
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={addFormula}
      >
        Add formula
      </button>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={resetFormulas}
      >
        Reset formulas
      </button>
    </div>
  );
}
