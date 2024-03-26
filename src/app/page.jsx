import Controls from '@/components/Controls';
import Options from '@/components/Options';
import QueryCounter from '@/components/QueryCounter';

export async function getOptions() {
  const res = await fetch(
    'https://652f91320b8d8ddac0b2b62b.mockapi.io/autocomplete'
  );
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

export default async function Home() {
  const initialData = await getOptions();

  return (
    <div className="flex flex-col w-2/3">
      <Options options={initialData} />
      <Controls />
      <QueryCounter />
    </div>
  );
}
