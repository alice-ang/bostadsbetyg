import React, { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

export const RoundedButton = ({ children }: Props) => {
  return (
    <div className='cursor-pointer rounded-full border border-yellow-700 bg-orange-50 p-2 text-center font-semibold text-yellow-700 hover:border-yellow-500 hover:bg-yellow-500 hover:text-white'>
      {children}
    </div>
  );
};
