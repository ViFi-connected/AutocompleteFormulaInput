import Controls from '@/components/Controls';
import Formula from '@/components/Formula';
import FormulaCounter from '@/components/FormulaCounter';

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
    <div className='flex h-screen flex-col place-content-center items-center'>
      <Formula options={initialData} />
      <Controls/>
      <FormulaCounter />
    </div>
  );
}
