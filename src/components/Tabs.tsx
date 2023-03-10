import React from 'react';

import clsxm from '@/lib/clsxm';

type Props = {
  name: string;
  value: string;
  isCurrentTab: boolean;
  setCurrentTab: (tab: string) => void;
};

export const Tabs = ({ name, value, isCurrentTab, setCurrentTab }: Props) => {
  return (
    <span
      key={name}
      aria-current={isCurrentTab ? 'page' : undefined}
      className={clsxm(
        isCurrentTab
          ? 'font-medium text-gray-700'
          : 'bg-white text-gray-500  hover:text-gray-700 ',

        'group relative min-w-0 flex-1 items-center overflow-hidden py-4 px-6 text-center hover:bg-gray-50'
      )}
      onClick={() => setCurrentTab(value)}
    >
      <span>{name}</span>
      <span
        aria-hidden='true'
        className={clsxm(
          isCurrentTab ? 'bg-yellow-500' : 'bg-transparent',
          'absolute inset-x-0 bottom-0 h-1'
        )}
      />
    </span>
  );
};
