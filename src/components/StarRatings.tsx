import { useState } from 'react';
import { AiFillStar } from 'react-icons/ai';

import clsxm from '@/lib/clsxm';

type Props = {
  defaultRating?: number;
  onRate: (rating: number) => void;
  className?: string;
};

export const StarRatings = ({ onRate, defaultRating, className }: Props) => {
  const [selectedRating, setSelectedRating] = useState(defaultRating ?? 1);

  return (
    <div className='flex w-fit'>
      {[0, 1, 2, 3, 4].map((star) => (
        <AiFillStar
          key={star}
          className={clsxm(
            className ? className : 'h-8 w-8 ',
            selectedRating > star ? 'text-yellow-400' : 'text-gray-300',
            'my-2 flex-shrink-0 hover:text-yellow-400'
          )}
          aria-hidden='true'
          onClick={() => {
            setSelectedRating(star + 1);
            onRate(star + 1);
          }}
        />
      ))}
    </div>
  );
};
