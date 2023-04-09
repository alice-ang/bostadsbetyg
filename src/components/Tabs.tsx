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
  hiddenTab?: string;
};

export const Tabs = ({ tabs, currentTab, setCurrentTab, hiddenTab }: Props) => {
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
            hiddenTab == value ? 'block lg:hidden' : '',
            currentTab == value
              ? 'font-semibold text-gray-700'
              : 'text-gray-500 hover:text-gray-700	',

            'relative flex-1  bg-white py-4 px-6 text-center '
          )}
          onClick={() => setCurrentTab(value)}
        >
          <span>{name}</span>
          <span
            aria-hidden='true'
            className={clsxm(
              value == currentTab ? 'bg-yellow-500' : 'bg-transparent',
              'absolute inset-x-0 bottom-0 h-1'
            )}
          />
        </span>
      ))}
    </nav>
  );
};
