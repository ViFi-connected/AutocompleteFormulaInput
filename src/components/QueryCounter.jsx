'use client';

import useQueryStore from '@/store';

export default function QueryCounter() {
  const queries = useQueryStore((state) => state.queries);
  return <h1>Number of queries: {queries}</h1>;
}
