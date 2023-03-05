import { useState } from 'react';
import { GoSettings } from 'react-icons/go';

import clsxm from '@/lib/clsxm';

import { HousingItem, Layout, SearchList } from '@/components';
import Seo from '@/components/Seo';

const tabs = [
  { name: 'Omdömen', value: 'Reviews' },
  { name: 'Hyresvärdar', value: 'Landlords' },
];

export default function SearchPage() {
  const [currentTab, setCurrentTab] = useState<string>('Reviews');
  return (
    <Layout>
      <Seo templateTitle='Lägenheter i {{Skövde}}' />
      <main className=' grid h-screen grid-cols-6'>
        <div className='relative col-span-6 bg-white md:col-span-4 lg:col-span-3 xl:col-span-2 '>
          <div className='sticky top-0 left-0 right-0 bg-white pt-6 '>
            <div className='flex items-center justify-between px-4 md:px-8'>
              <span className='flex-1'>
                <SearchList />
              </span>
              <span className='ml-4 flex h-fit cursor-pointer items-center justify-center rounded-full border p-2 hover:bg-yellow-500 hover:text-white focus:border-yellow-500  focus:ring-yellow-500'>
                <GoSettings />
              </span>
            </div>
            <div className='my-4 px-4 md:px-8'>badge</div>
            {/* Tabs */}
            <nav
              className='isolate flex divide-x divide-gray-200 rounded-lg shadow'
              aria-label='Tabs'
            >
              {tabs.map((tab, tabIdx) => (
                <span
                  key={tab.name}
                  aria-current={tab.value == currentTab ? 'page' : undefined}
                  className={clsxm(
                    tab.value == currentTab
                      ? 'font-medium text-gray-700'
                      : 'text-gray-500 hover:text-gray-700',
                    tabIdx === 0 ? 'rounded-l-lg' : '',
                    tabIdx === tabs.length - 1 ? 'rounded-r-lg' : '',
                    'group relative min-w-0 flex-1 items-center overflow-hidden bg-white py-4 px-6 text-center hover:bg-gray-50'
                  )}
                  onClick={() => setCurrentTab(tab.value)}
                >
                  <span>{tab.name}</span>
                  <span
                    aria-hidden='true'
                    className={clsxm(
                      tab.value == currentTab
                        ? 'bg-yellow-500'
                        : 'bg-transparent',
                      'absolute inset-x-0 bottom-0 h-1'
                    )}
                  />
                </span>
              ))}
            </nav>
          </div>

          {/* <div className='flex'>
            <div className='mr-2 flex h-[30px] w-fit items-center  rounded-t bg-yellow-500 px-4 font-semibold text-white'>
              Omdömen
            </div>
            <div className='flex h-[30px] w-fit items-center rounded-t border-x-2 border-t-2 border-x-yellow-500  border-t-yellow-500 px-4'>
              Hyresvärdar
            </div>
          </div> */}

          {currentTab == 'Reviews' && (
            <div className='px-4 md:px-8'>
              {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => {
                return <HousingItem key={i} />;
              })}
            </div>
          )}
        </div>
        <div className=' col-span-6 bg-gray-100 md:col-span-2  lg:col-span-3 xl:col-span-4'>
          GOOGLE MAPS HERE PLS
        </div>
      </main>
    </Layout>
  );
}
