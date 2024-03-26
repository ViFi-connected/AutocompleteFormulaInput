'use client';

import useQueryStore from '@/store';

export default function Controls() {
  const addQuery = useQueryStore((state) => state.addQuery);
  const resetQueries = useQueryStore((state) => state.resetQueries);
  return (
    <div className='flex flex-row gap-5 m-5'>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={addQuery}>Add query</button>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={resetQueries}>Reset queries</button>
    </div>
  );
}
