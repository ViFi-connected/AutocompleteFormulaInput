'use client';

import useQueryStore from '@/store';

export default function Controls() {
  const addQuery = useQueryStore((state) => state.addQuery);
  const resetQueries = useQueryStore((state) => state.resetQueries);
  return (
    <div>
      <button onClick={addQuery}>Add query</button>
      <button onClick={resetQueries}>Reset queries</button>
    </div>
  );
}
