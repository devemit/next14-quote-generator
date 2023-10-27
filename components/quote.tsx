import getQuotes from '@/data';
import { Suspense } from 'react';
import QuoteContent from './quote-content';
import { QuoteProps } from '@/types';
export default async function Quote() {
  const data = getQuotes();
  const quotes: QuoteProps = await data;

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
