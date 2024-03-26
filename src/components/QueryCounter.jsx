'use client';

import useQueryStore from '@/store';

export default function QueryCounter() {
  const queries = useQueryStore((state) => state.queries);
  return (
    <h1 className="text-3xl font-bold">
      Number of queries: {queries}
    </h1>
  );
}
