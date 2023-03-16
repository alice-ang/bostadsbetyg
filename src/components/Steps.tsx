import { FC } from 'react';
import { BsCheck } from 'react-icons/bs';

import clsxm from '@/lib/clsxm';

type Props = {
  currentStep: number;
  items: unknown[];
};

export const Steps: FC<Props> = ({ items, currentStep }) => {
  const calculate = (step: number) => {
    if (currentStep == step) {
      return 'current';
    }
    if (currentStep > step) {
      return 'complete';
    }
    if (currentStep < step) {
      return 'next';
    }
  };

  return (
    <nav aria-label='Progress'>
      <ol role='list' className='flex items-center justify-between'>
        {items.map((item, idx) => (
          <li
            className={clsxm(
              idx != 0 ? ' w-full ' : ' ',
              'inline-flex items-center '
            )}
            key={idx}
          >
            {idx != 0 && (
              <div
                key={idx}
                className={clsxm(
                  calculate(idx) != 'next' ? 'bg-yellow-500' : ' bg-gray-300',
                  '-mx-4 h-2 w-full'
                )}
              ></div>
            )}

            <div
              className={clsxm(
                calculate(idx) == 'complete'
                  ? 'border-yellow-500 bg-yellow-500 '
                  : 'border-gray-300',
                calculate(idx) == 'current'
                  ? 'border-yellow-500 bg-yellow-500'
                  : '',
                calculate(idx) == 'next' ? 'bg-gray-300' : '',
                'relative flex h-4 w-4 items-center justify-center rounded-full border-4 p-3 text-white '
              )}
            >
              {calculate(idx) == 'complete' ? (
                <BsCheck className='absolute h-10 w-full text-white' />
              ) : (
                <p className='font-bold'>{idx + 1}</p>
              )}
            </div>
          </li>
        ))}
      </ol>
    </nav>
  );
};
