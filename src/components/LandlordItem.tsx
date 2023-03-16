import React from 'react';
import { AiFillStar } from 'react-icons/ai';

import clsxm from '@/lib/clsxm';

import NextImage from '@/components/NextImage';

type Props = {
  hasDivider?: boolean;
  landlord: {
    name: string;
    logo: string;
    numOfReviews: number;
    city: string;
    rating: number;
  };
};

export const LandlordItem = ({ hasDivider = true, landlord }: Props) => {
  return (
    <div
      className={clsxm(hasDivider ? 'border-t border-gray-200' : ' ', 'py-6')}
    >
      <div className='flex items-center justify-between'>
        <div>
          <p className='text-sm text-gray-500'> {landlord.city}</p>
          <h4 className='text-xl'>{landlord.name}</h4>
          <span className='inline-flex items-center align-middle'>
            {[0, 1, 2, 3, 4].map((i) => (
              <AiFillStar
                key={i}
                className={clsxm(
                  landlord.rating > i ? 'text-yellow-400' : 'text-gray-300',
                  'h-7 w-7 flex-shrink-0'
                )}
                aria-hidden='true'
              />
            ))}
            <span className='pl-2 text-sm'>
              ({landlord.numOfReviews} omdömen)
            </span>
          </span>
        </div>
        <div>
          <NextImage
            src={landlord.logo}
            alt={landlord.name}
            width={70}
            height={70}
            priority
          />
        </div>
      </div>
    </div>
  );
};
