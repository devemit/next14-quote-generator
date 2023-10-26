import { BsInstagram } from 'react-icons/bs';
import { RiTwitterXFill } from 'react-icons/ri';
import Link from 'next/link';
export default function Socials() {
  return (
    <div className='flex items-center justify-end gap-2 text-slate-200 mt-10'>
      <p className='text-xs text-blue-500'>Share on</p>
      <div className='flex items-center gap-1'>
        <Link target='_blank' href={'https://www.instagram.com'}>
          <BsInstagram size={15} />
        </Link>
        <Link target='_blank' href={'https://www.twitter.com'}>
          <RiTwitterXFill size={15} />
        </Link>
      </div>
    </div>
  );
}
