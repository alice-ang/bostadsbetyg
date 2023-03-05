import React from 'react';
import { BsStar, BsStarFill, BsStarHalf } from 'react-icons/bs';

import NextImage from '@/components/NextImage';

export const HousingItem = () => {
  return (
    <div className=' border-t border-gray-200 py-6'>
      <div
        className='
      mb-4
      h-[160px]  
      rounded-md
  bg-orange-100'
      ></div>
      <div className='flex items-center justify-between'>
        <div>
          <p className='text-sm text-gray-500'>Centrum, Skövde</p>
          <h4 className='text-lg'>Norra Trängallén 3</h4>
          <span className='inline-flex'>
            <BsStarFill className='text-yellow-500' size={24} />
            <BsStarFill className='text-yellow-500' size={24} />
            <BsStarFill className='text-yellow-500' size={24} />
            <BsStarHalf className='text-yellow-500' size={24} />
            <BsStar className='text-yellow-500' size={24} />
            12
          </span>
        </div>
        <div>
          <NextImage
            src='/lorentzon.png'
            alt='logo'
            width={70}
            height={70}
            priority
          />
        </div>
      </div>
    </div>
  );
};
