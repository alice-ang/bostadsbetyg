import { LogoRating } from '@/components/LogoRating';
import NextImage from '@/components/NextImage';

type Props = {
  review: {
    title: string;
    id: number;
    content: string;
    rating: number;
    author: {
      avatar: string;
      name: string;
    };
  };
};

export const Review = ({ review }: Props) => {
  return (
    <div className='mt-4 flex flex-col rounded bg-white p-6 shadow'>
      <div className='flex flex-wrap items-center justify-between'>
        <div className='flex flex-wrap items-center'>
          <NextImage
            src={review.author.avatar}
            alt={`${review.author.name}.`}
            imgClassName=' rounded-full'
            width={40}
            height={40}
          />
          <span className='ml-3'>
            <p className='text-sm font-medium text-gray-900'>
              {review.author.name}
            </p>
            <p className='text-xs text-gray-500'>Juli 16, 2021</p>
          </span>
        </div>

        <LogoRating rating={review.rating} />
      </div>
      <div className='my-4 border-t'></div>
      <div key={review.id} className='flex flex-col '>
        <div className=''>
          <h3 className='text-xl font-medium text-gray-900'>{review.title}</h3>
          <p className='sr-only'>{review.rating} out of 5 stars</p>

          <div
            className='mt-3 space-y-6 text-sm text-gray-600'
            dangerouslySetInnerHTML={{ __html: review.content }}
          />
        </div>
      </div>
    </div>
  );
};
