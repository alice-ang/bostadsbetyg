import Link from 'next/link';
import { useState } from 'react';
import { BsPencilSquare } from 'react-icons/bs';

import { Banner, Layout, LogoRating, Review, Tabs } from '@/components';
import { Breakdown } from '@/components/Breakdown';
import NextImage from '@/components/NextImage';
import Seo from '@/components/Seo';

const tabs = [
  // { name: 'Lägenhet', value: 'apartment' },
  { name: 'Omdömen', value: 'reviews' },
  { name: 'Bilder', value: 'photos' },
];

const amenities = [
  {
    type: 'Läge',
    count: 43,
    totalCount: 100,
    icon: () => (
      <span
        role='img'
        aria-label='location'
        aria-hidden='false'
        className='text-3xl'
      >
        📍
      </span>
    ),
  },
  {
    type: 'Område',
    count: 80,
    totalCount: 100,
    icon: () => (
      <span
        role='img'
        aria-label='area'
        aria-hidden='false'
        className='text-3xl'
      >
        🌍
      </span>
    ),
  },
  {
    type: 'Byggnad',
    count: 80,
    totalCount: 100,
    icon: () => (
      <span
        role='img'
        aria-label='building'
        aria-hidden='false'
        className='text-3xl'
      >
        🏡
      </span>
    ),
  },
  {
    type: 'Badrum',
    count: 37,
    totalCount: 100,
    icon: () => (
      <span
        role='img'
        aria-label='kitchen'
        aria-hidden='false'
        className='text-3xl'
      >
        🚽
      </span>
    ),
  },
  {
    type: 'Kök',
    count: 70,
    totalCount: 100,
    icon: () => (
      <span
        role='img'
        aria-label='kitchen'
        aria-hidden='false'
        className='text-3xl'
      >
        🍽️
      </span>
    ),
  },
];

const reviews = [
  {
    id: 1,
    title: 'Ok lägenhet men väldigt bra kundservice',
    rating: 3,
    content: `
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ut felis eros. Aenean ac orci lorem. Sed vulputate interdum maximus. Morbi hendrerit, nisl ut malesuada auctor, turpis lacus rutrum erat, at pulvinar ante ligula at ex. Aliquam et enim dolor. Nam tempus, est id maximus semper, lectus leo dignissim tortor, non fermentum eros tellus a ligula! </p>
    `,
    author: {
      name: 'Mark Edwards',
      avatar:
        'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixqx=oilqXxSqey&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
  {
    id: 2,
    title: 'Fin lägenhet, bra område',
    rating: 4,
    content: `
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ut felis eros. Aenean ac orci lorem. Sed vulputate interdum maximus. Morbi hendrerit, nisl ut malesuada auctor, turpis lacus rutrum erat, at pulvinar ante ligula at ex. Aliquam et enim dolor. Nam tempus, est id maximus semper, lectus leo dignissim tortor, non fermentum eros tellus a ligula. In orci lectus, tincidunt et purus a, congue placerat lorem.
      </p>
    `,
    author: {
      name: 'Blake Reid',
      avatar:
        'https://images.unsplash.com/photo-1520785643438-5bf77931f493?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.5&w=256&h=256&q=80',
    },
  },
  {
    id: 3,
    title: 'Bodde här i 3 år..',
    rating: 3,
    content: `
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ut felis eros. Aenean ac orci lorem. Sed vulputate interdum maximus. Morbi hendrerit, nisl ut malesuada auctor.      </p>
    `,
    author: {
      name: 'Ben Russel',
      avatar:
        'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
];

export default function ItemPage() {
  const [currentTab, setCurrentTab] = useState<string>(tabs[0].value);

  return (
    <Layout>
      <Seo templateTitle='{{Item}}' />

      <main className='bg-slate-50'>
        <Banner src='https://source.unsplash.com/random/1920x1080/?apartment,dorm'>
          <p className='block text-sm text-white md:hidden'>Skövdebostäder</p>
          <h2 className=' text-3xl font-bold text-white sm:text-4xl'>
            Norra trängallén 3
          </h2>
          <div className='flex flex-wrap  items-center justify-center'>
            <LogoRating rating={4} />
            <p className='sr-only'>{4} out of 5 stars</p>
            <p className='text-med ml-2 text-white'>
              (3.8) based on {reviews.length} reviews
            </p>
          </div>
          <div className='absolute bottom-8 left-8 hidden md:block'>
            <NextImage
              src='/skovdebostader.png'
              alt='logo'
              width={70}
              height={70}
              priority
              className='rounded bg-white'
            />
          </div>
        </Banner>
        <section className='mx-auto max-w-7xl py-4 px-4 md:py-6 lg:py-8'>
          <div className='grid grid-cols-6 gap-3 md:gap-5 '>
            <div className=' col-span-6 rounded bg-white p-4 shadow md:col-span-3 md:p-6 xl:col-span-2'>
              <nav aria-label='sidebar' className='sticky top-4'>
                <h4 className='text-center text-xl font-extrabold tracking-tight text-gray-700 sm:text-3xl'>
                  Betyg
                </h4>
                <dl className=' mt-4 space-y-4  '>
                  {amenities.map((item) => {
                    return (
                      <Breakdown
                        icon={item.icon}
                        count={item.count}
                        totalCount={item.totalCount}
                        title={item.type}
                        key={item.type}
                      />
                    );
                  })}
                </dl>
                <div className='mt-8 border-t border-gray-200 pt-10'>
                  <h4 className='pb-4 text-center text-xl font-extrabold tracking-tight text-gray-700 sm:text-3xl'>
                    Karta
                  </h4>
                  <div className='h-[250px]'>
                    <iframe
                      src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8364.976577639782!2d13.836858432796966!3d58.38928326703061!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465b023d3a4c413d%3A0x817d30b9033d4604!2zU2vDtnZkZQ!5e0!3m2!1ssv!2sse!4v1678730360113!5m2!1ssv!2sse'
                      width='100%'
                      height='100%'
                      style={{ border: 0 }}
                      allowFullScreen={true}
                      aria-hidden='false'
                      tabIndex={0}
                    />
                  </div>
                </div>
              </nav>
            </div>
            <div className='col-span-6 rounded  md:col-span-3 xl:col-span-3'>
              <span className='sticky top-0'>
                <Tabs
                  tabs={tabs}
                  currentTab={currentTab}
                  // hiddenTab={tabs[0].value}
                  setCurrentTab={(tab) => setCurrentTab(tab)}
                />
              </span>

              {currentTab == 'reviews' && (
                <section className='overflow-x-hidden'>
                  {[...reviews, ...reviews, ...reviews].map((review) => {
                    return <Review key={review.id} review={review} />;
                  })}
                </section>
              )}
            </div>
            <div className='order-first col-span-6 min-h-[120px] space-y-4 rounded bg-white p-4 shadow xl:order-last xl:col-span-1'>
              <div className='sticky top-4'>
                <div className=''>
                  <h3 className='text-lg font-medium text-gray-900'>
                    Dela dina erfarenheter
                  </h3>

                  <Link
                    href='/evaluate'
                    className='border-yellow-6500 mt-3 inline-flex w-full items-center justify-center rounded-md border bg-yellow-500 py-3  text-center  text-sm font-medium text-white hover:border-yellow-700 hover:bg-orange-50 hover:text-orange-900 sm:w-auto lg:w-full'
                  >
                    Skriv omdöme <BsPencilSquare className='ml-2 ' size={18} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
