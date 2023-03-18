import { AiFillStar } from 'react-icons/ai';

import clsxm from '@/lib/clsxm';

import NextImage from '@/components/NextImage';

type Props = {
  rating: number;
  size?: number;
};

export const LogoRating = ({ rating, size = 36 }: Props) => {
  return (
    <div className='flex items-center '>
      {[0, 1, 2, 3, 4].map((num) => {
        return (
          <span className='flex items-center justify-center' key={num}>
            <NextImage
              src='/logo-simple.svg'
              alt='Bostadsbetyg'
              height={size}
              width={size}
              imgClassName='relative'
            />
            <AiFillStar
              className={clsxm(
                rating > num ? 'text-yellow-400' : 'text-gray-300',
                'absolute h-7 w-7 pt-0.5'
              )}
              aria-hidden='true'
            />
          </span>
        );
      })}
    </div>
  );
};
