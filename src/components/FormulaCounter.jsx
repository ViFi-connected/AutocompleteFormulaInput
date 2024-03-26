'use client';

import useFormulaStore from '@/store';

export default function FormulaCounter() {
  const formulas = useFormulaStore((state) => state.formulas);
  return <h1 className="text-3xl font-bold">Number of formulas: {formulas}</h1>;
}
