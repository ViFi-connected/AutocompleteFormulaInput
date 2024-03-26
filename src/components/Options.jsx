'use client';

import { useQuery } from '@tanstack/react-query';
import { getOptions } from '@/app/page';
import CreatableSelect from 'react-select/creatable';

export default function Options(props) {
  const { data } = useQuery({
    queryKey: ['name'],
    queryFn: getOptions,
    initialData: props.posts,
  });

  console.log(data);
  const options = data?.map((item) => {
    return { value: item.value, label: item.name };
  });

  return (
    <CreatableSelect
      options={options}
      isMulti
      name="query"
      className="basic-multi-select"
      classNamePrefix="select"
    />
  );
}
