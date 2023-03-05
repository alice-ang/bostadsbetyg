import { useRouter } from 'next/router';
import React, { useRef } from 'react';

export const SearchList = () => {
  const serachRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  return (
    <div className='relative flex rounded-full border border-gray-300 shadow-sm'>
      <input
        ref={serachRef}
        type='text'
        name='search'
        id='search'
        className=' text-md w-full rounded-none rounded-l-full border-none pl-4 pr-0 focus:border-transparent focus:ring-0 lg:pl-6'
        placeholder='Sök stad, adress eller område'
        autoComplete='off'
      />

      <button
        onClick={() =>
          router.push({
            pathname: '/search',
          })
        }
        type='button'
        className='text-md m-2 inline-flex items-center justify-center rounded-full bg-yellow-500 py-2 px-4 font-semibold text-white '
      >
        Sök
      </button>
    </div>
  );
};
