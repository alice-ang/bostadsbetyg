import React from 'react';

import NextImage from '@/components/NextImage';

type LogoProps = {
  size?: number;
};
export const Logo = ({ size = 40 }: LogoProps) => {
  return (
    <NextImage
      src='/bostadsbetyg.svg'
      alt='Bostadsbetyg logga'
      height={size}
      width={size}
    />
  );
};
