import Link from 'next/link';
import { useState } from 'react';
import { GoSettings } from 'react-icons/go';

import {
  HousingItem,
  LandlordItem,
  Layout,
  SearchList,
  Tabs,
} from '@/components';
import Seo from '@/components/Seo';

const tabs = [
  { name: 'Omdömen', value: 'Reviews' },
  { name: 'Hyresvärdar', value: 'Landlords' },
];

const apartments = [
  {
    street: 'Norra Trängallén 3',
    numOfReviews: 3,
    rating: 3,
    landlord: {
      name: 'Skövdebostäder',
      logo: '/skovdebostader.png',
    },
    image: 'https://source.unsplash.com/random/1920x1080/?apartment,dorm',
    area: 'Centrum',
    city: 'Skövde',
  },
  {
    street: 'Mariestadsvägen 3A',
    numOfReviews: 2,
    rating: 4,
    landlord: {
      name: 'Lorentzon AB',
      logo: '/lorentzon.png',
    },
    image: 'https://source.unsplash.com/random/1919x1080/?apartment,dorm',
    area: 'Centrum',
    city: 'Skövde',
  },
  {
    street: 'Timmervägen 7A',
    numOfReviews: 6,
    image: 'https://source.unsplash.com/random/1920x1081/?apartment,dorm',
    landlord: {
      name: 'Fastighets AB Balder',
      logo: '/balder.png',
    },
    rating: 3,
    area: 'Ryd',
    city: 'Skövde',
  },
];

export default function SearchPage() {
  const [currentTab, setCurrentTab] = useState<string>(tabs[0].value);
  return (
    <Layout>
      <Seo templateTitle='Lägenheter i {{Skövde}}' />
      <main className=' grid h-screen grid-cols-6'>
        <div className='relative col-span-6 bg-white md:col-span-3 xl:col-span-2 '>
          <div className='sticky top-0 left-0 right-0 z-10 bg-white pt-6'>
            <div className='flex items-center justify-between px-4 md:px-8'>
              <span className='flex-1'>
                <SearchList />
              </span>
              <span className='ml-4 flex h-fit cursor-pointer items-center justify-center rounded-full border p-2 hover:bg-yellow-500 hover:text-white focus:border-yellow-500  focus:ring-yellow-500'>
                <GoSettings />
              </span>
            </div>
            {/* <div className='my-4 px-4 md:px-8'>badge</div> */}
            {/* Tabs */}
            <Tabs
              tabs={tabs}
              currentTab={currentTab}
              setCurrentTab={(tab) => setCurrentTab(tab)}
            />
          </div>

          {currentTab == 'Reviews' && (
            <div className='px-4 md:px-8'>
              {apartments.map((apartment, i) => {
                return (
                  <Link key={i} href='/item'>
                    <HousingItem hasDivider={i != 0} apartment={apartment} />
                  </Link>
                );
              })}
            </div>
          )}
          {currentTab == 'Landlords' && (
            <div className='px-4 md:px-8'>
              {apartments.map((apartment, i) => {
                return (
                  <Link key={i} href='/'>
                    <LandlordItem
                      hasDivider={i != 0}
                      landlord={{
                        name: apartment.landlord.name,
                        logo: apartment.landlord.logo,
                        numOfReviews: apartment.numOfReviews,
                        city: apartment.city,
                        rating: apartment.rating,
                      }}
                    />
                  </Link>
                );
              })}
            </div>
          )}
        </div>
        <div className='order-first col-span-6  min-h-[200px] bg-gray-100 md:order-last md:col-span-3 xl:col-span-4'>
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
      </main>
    </Layout>
  );
}
