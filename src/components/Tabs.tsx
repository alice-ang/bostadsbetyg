import React from 'react';

import clsxm from '@/lib/clsxm';

type Tab = {
  name: string;
  value: string;
};

type Props = {
  tabs: Tab[];
  currentTab: string;
  setCurrentTab: (tab: string) => void;
};

export const Tabs = ({ tabs, currentTab, setCurrentTab }: Props) => {
  return (
    <nav
      className='isolate flex divide-x divide-gray-200 rounded-lg shadow'
      aria-label='Tabs'
    >
      {tabs.map(({ name, value }) => (
        <span
          key={name}
          aria-current={currentTab == value ? 'page' : undefined}
          className={clsxm(
            currentTab == value
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
              currentTab == value ? 'bg-yellow-500' : 'bg-transparent',
              'absolute inset-x-0 bottom-0 h-1'
            )}
          />
        </span>
      ))}
    </nav>
  );
};
