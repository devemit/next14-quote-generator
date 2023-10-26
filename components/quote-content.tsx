'use client';
import { useState } from 'react';
import Controls from './controls';
import Socials from '@/components/socials';

export default function QuoteContent({ quotes }: Record<any, any>) {
  const [activeIndex, setActiveIndex] = useState(0);

  function nextQuote() {
    setActiveIndex((prev) => prev + 1);
  }
  function previousQuote() {
    setActiveIndex((prev) => prev - 1);
  }

  return (
    <>
      <div>
        <p className='text-slate-300 max-w-lg text-lg md:text-xl lg:text-2xl  italic'>
          "{quotes[activeIndex].text}"
        </p>
        <p className='text-slate-400 text-base md:text-lg mt-8'> - {quotes[activeIndex].author}</p>
      </div>
      <Controls handleNextQuote={nextQuote} previousQuote={previousQuote} />
      <Socials />
    </>
  );
}
