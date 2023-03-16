import Image from 'next/image';
import React from 'react';
import { AiFillStar } from 'react-icons/ai';

import clsxm from '@/lib/clsxm';

import NextImage from '@/components/NextImage';

type Props = {
  apartment: {
    street: string;
    landlord: {
      name: string;
      logo: string;
    };
    numOfReviews: number;
    area: string;
    city: string;
    image: string;
    rating: number;
  };
  hasDivider?: boolean;
};

export const HousingItem = ({ hasDivider = true, apartment }: Props) => {
  return (
    <div
      className={clsxm(hasDivider ? 'border-t border-gray-200' : ' ', 'py-6')}
    >
      <div className=' relative mb-4 h-[160px] rounded-md bg-orange-100'>
        <Image
          src={apartment.image}
          alt={apartment.street}
          fill
          style={{ objectFit: 'cover' }}
        />
      </div>
      <div className='flex items-center justify-between'>
        <div>
          <p className='text-sm text-gray-500'>
            {apartment.area}, {apartment.city}
          </p>
          <h4 className='text-lg'>{apartment.street}</h4>
          <span className='inline-flex items-center align-middle'>
            {[0, 1, 2, 3, 4].map((i) => (
              <AiFillStar
                key={i}
                className={clsxm(
                  apartment.rating > i ? 'text-yellow-400' : 'text-gray-300',
                  'h-7 w-7 flex-shrink-0'
                )}
                aria-hidden='true'
              />
            ))}

            <span className='pl-2 text-sm'>
              ({apartment.numOfReviews} omdömen)
            </span>
          </span>
        </div>
        <div>
          <NextImage
            src={apartment.landlord.logo}
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
