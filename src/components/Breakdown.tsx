import { ReactNode } from 'react';

import clsxm from '@/lib/clsxm';

type RatingProps = {
  count: number;
  totalCount: number;
  title?: string;
  rating?: number;
  children?: ReactNode;
  hideRating?: boolean;
  icon: () => JSX.Element;
};

export const Breakdown = ({
  count,
  totalCount,
  title,
  children,
  icon,
}: RatingProps) => {
  return (
    <>
      <div className='text-l text-center'>
        <p className='text-sm'>{title}</p>
        <div className='flex items-center text-sm'>
          <dt className='flex flex-1 items-center'>
            <div aria-hidden='true' className='flex flex-1 items-center'>
              <>{icon()}</>
              <div className='relative ml-3 flex-1'>
                <div className='h-3 rounded-full border border-gray-200 bg-gray-100' />
                {count > 0 ? (
                  <div
                    className={clsxm(
                      `absolute inset-y-0 rounded-full border-yellow-400 bg-yellow-400`
                    )}
                    style={{
                      width: `calc(${count} / ${totalCount} * 100%)`,
                    }}
                  />
                ) : null}
              </div>
            </div>
          </dt>
          <dd className='ml-3 w-10 text-right text-sm tabular-nums text-gray-900'>
            {Math.round((count / totalCount) * 100)}%
          </dd>
        </div>
      </div>
      {children}
    </>
  );
};
