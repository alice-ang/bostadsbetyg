import Image from 'next/image';
import React, { ReactNode } from 'react';

import clsxm from '@/lib/clsxm';

type BannerProps = {
  src?: string;
  children: ReactNode;
};

export const Banner = ({ src, children }: BannerProps) => {
  return (
    <div className='relative isolate overflow-hidden bg-gray-900'>
      <div
        aria-hidden='true'
        className={clsxm(
          children ? 'bg-gray-900' : 'bg-white-900',
          'absolute inset-0  bg-opacity-50'
        )}
      />
      <Image
        src={src ?? '/dorm.jpg'}
        alt=''
        loading='eager'
        blurDataURL={src ?? '/dorm.jpg'}
        fill
        placeholder='blur'
        className='absolute inset-0 -z-10 h-full w-full object-cover'
      />

      <div className='relative px-6 lg:px-8'>
        <div className='mx-auto max-w-2xl py-12 md:py-28'>
          <div className='z-10 text-center'>{children}</div>
        </div>
      </div>
    </div>
  );
};
