import Header from '@/components/header';
import Quote from '@/components/quote';
export default function Home() {
  return (
    <main className='flex min-h-screen bg-slate-900 flex-col items-center justify-center p-8'>
      <section className='bg-slate-800 p-10  rounded-lg w-full max-w-2xl'>
        <Header />
        <Quote />
      </section>
    </main>
  );
}
