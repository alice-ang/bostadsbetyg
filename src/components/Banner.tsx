import Image from 'next/image';
import React, { ReactNode } from 'react';

type BannerProps = {
  src: string;
  children: ReactNode;
};

export const Banner = ({ src, children }: BannerProps) => {
  return (
    <div className='relative isolate overflow-hidden bg-gray-900'>
      <Image
        src={src}
        alt=''
        width={700}
        height={475}
        sizes='100vw'
        style={{
          width: '100%',
          height: 'auto',
        }}
        className='absolute inset-0 -z-10 h-full w-full object-cover'
      />

      <div className='px-6 lg:px-8'>
        <div className='mx-auto max-w-2xl py-16 md:py-32'>
          <div className='text-center'>{children}</div>
        </div>
      </div>
    </div>
  );
};
