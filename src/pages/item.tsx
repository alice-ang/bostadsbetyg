import { useState } from 'react';
import { AiFillStar } from 'react-icons/ai';

import clsxm from '@/lib/clsxm';

import { Banner, Layout, Tabs } from '@/components';
import Seo from '@/components/Seo';

const tabs = [
  { name: 'Lägenhet', value: 'item' },
  { name: 'Omdömen', value: 'reviews' },
  { name: 'Bilder', value: 'photos' },
];

export default function ItemPage() {
  const [currentTab, setCurrentTab] = useState<string>(tabs[0].value);

  return (
    <Layout>
      <Seo templateTitle='' />

      <main className='bg-slate-50'>
        <Banner>
          <h2 className=' text-3xl font-bold text-white sm:text-4xl'>
            Norra trängallén 3
          </h2>
          <div className='flex flex-wrap  items-center justify-center'>
            {[0, 1, 2, 3, 4].map((rating) => (
              <AiFillStar
                key={rating}
                className={clsxm(
                  4 > rating ? 'text-yellow-400' : 'text-gray-300',
                  'my-2 h-8 w-8 flex-shrink-0'
                )}
                aria-hidden='true'
              />
            ))}
            <p className='sr-only'>{4} out of 5 stars</p>
            <p className='text-med ml-2 text-white'>(3.8) based on 4 reviews</p>
          </div>
        </Banner>
        <section className='mx-auto max-w-7xl py-4 md:py-6 lg:py-8'>
          <div className='grid grid-cols-6 gap-3 md:gap-5'>
            <div className='col-span-6 min-h-screen rounded bg-white py-6 shadow md:col-span-2'>
              <h4 className='text-center text-xl font-extrabold tracking-tight text-gray-700 sm:text-3xl'>
                Betyg
              </h4>
            </div>
            <div className='col-span-6 rounded bg-white shadow md:col-span-4'>
              <Tabs
                tabs={tabs}
                currentTab={currentTab}
                setCurrentTab={(tab) => setCurrentTab(tab)}
              />
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
