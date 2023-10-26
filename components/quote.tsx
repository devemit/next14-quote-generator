import getQuotes from '@/data';
import { Suspense } from 'react';
import QuoteContent from './quote-content';
export default async function Quote() {
  const data: Promise<any> = getQuotes();
  const quotes = await data;

  return (
    <>
      <Suspense
        fallback={
          <span className='text-slate-200 flex items-center justify-center mb-5'>
            Loading Quote...
          </span>
        }
      >
        <QuoteContent quotes={quotes} />
      </Suspense>
    </>
  );
}
