import React from 'react';

import NextImage from '@/components/NextImage';

type LogoProps = {
  size?: number;
  showText?: boolean;
};
export const Logo = ({ size = 34, showText = true }: LogoProps) => {
  return (
    <span className='flex items-center'>
      <NextImage
        src='/bostadsbetyg.svg'
        alt='Bostadsbetyg logga'
        height={size}
        width={size}
      />
      {showText && (
        <p className='ml-2 text-xl font-bold text-gray-800'>bostadsbetyg.se</p>
      )}
    </span>
  );
};
