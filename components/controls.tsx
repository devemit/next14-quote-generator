import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

type ButtonProps = {
  handleNextQuote: () => void;
  previousQuote: () => void;
};

export default function Controls({ handleNextQuote, previousQuote }: ButtonProps) {
  return (
    <div className='flex items-center justify-evenly gap-4 mt-10'>
      <button>
        <IoIosArrowBack size={22} className='text-slate-200' onClick={previousQuote} />
      </button>
      <button>
        <IoIosArrowForward size={22} className='text-slate-200' onClick={handleNextQuote} />
      </button>
    </div>
  );
}
