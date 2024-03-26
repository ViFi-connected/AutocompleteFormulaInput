'use client';

import { getOptions } from './page';
import { useQuery } from '@tanstack/react-query';

export function Autocomplete(props) {
  const { data } = useQuery({
    queryKey: ['options'],
    queryFn: getOptions,
    initialData: props.options,
  });
}
