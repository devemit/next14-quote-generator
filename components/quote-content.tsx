'use client';
import { useState } from 'react';
import Controls from './controls';
import Socials from '@/components/socials';

type Quote = {
  text: string;
  author: string;
};

export default function QuoteContent({ quotes }: { quotes: Quote[] }) {
  const [activeIndex, setActiveIndex] = useState(0);

  function nextQuote() {
    setActiveIndex(activeIndex === quotes.length - 1 ? 0 : activeIndex + 1);
  }
  function previousQuote() {
    setActiveIndex(activeIndex === 0 ? quotes.length - 1 : activeIndex - 1);
  }

  return (
    <>
      <div>
        <p className='text-slate-300 max-w-lg text-lg md:text-xl lg:text-2xl  italic'>
          &quot;{quotes[activeIndex].text}&quot;
        </p>
        <p className='text-slate-400 text-base md:text-lg mt-8'>
          {' '}
          {'-'} {quotes[activeIndex].author}
        </p>
      </div>
      <Controls handleNextQuote={nextQuote} previousQuote={previousQuote} />
      <Socials />
    </>
  );
}
