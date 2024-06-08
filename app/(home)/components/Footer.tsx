import React from 'react';
import Navbar from './Navbar';
import { MovingBorderBtn } from '@/components/ui/moving-border';
import Link from 'next/link';
export default function Footer() {
  const resumeURL =
    'https://drive.google.com/file/d/1aBDoecTm8FOAaiZfHYThQ-D10CXYwX1U/view';
  return (
    <div className="border-t mt-10">
      <div className='flex flex-col items-center p-2'>
      <Link href={resumeURL}>
        <MovingBorderBtn borderRadius="0.5rem" className="p-3 font-semibold">
          <p>Full Resume🚀</p>
        </MovingBorderBtn>
      </Link>
      </div>
      <Navbar className="flex-col gap-5" />
    </div>
  );
}
