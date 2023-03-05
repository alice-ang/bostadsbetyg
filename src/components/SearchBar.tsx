import { useRouter } from 'next/router';
import { useRef } from 'react';

export const SearchBar = () => {
  const serachRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  return (
    <div className='mt-1 flex rounded-full shadow'>
      <div className='relative flex flex-grow items-stretch focus-within:z-10'>
        <div className='pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3'>
          <span
            role='img'
            aria-label='pin'
            aria-hidden='true'
            className='text-2xl'
          >
            📍
          </span>
        </div>
        <input
          ref={serachRef}
          type='text'
          name='search'
          id='search'
          className='block w-full rounded-none rounded-l-full border-gray-300 px-10 py-3 text-sm focus:border-yellow-300 focus:ring-yellow-300 lg:py-5'
          placeholder='Sök stad, adress eller område'
          autoComplete='off'
        />
      </div>
      <button
        onClick={() =>
          router.push({
            pathname: '/search',
          })
        }
        type='button'
        className='relative inline-flex w-fit items-center justify-center rounded-r-full border border-gray-300 bg-gray-50  px-3 hover:bg-gray-100 focus:border-yellow-300 focus:outline-none focus:ring-1 focus:ring-yellow-300 lg:px-8'
      >
        <span
          role='img'
          aria-label='search'
          aria-hidden='false'
          className='block px-2 text-2xl md:hidden'
        >
          🔎
        </span>
        <span
          role='img'
          aria-label='search'
          aria-hidden='false'
          className='text-l hidden md:block'
        >
          Sök
        </span>
      </button>
    </div>
  );
};
