import { useState } from 'react';
import { AiFillStar } from 'react-icons/ai';

import clsxm from '@/lib/clsxm';

import { Banner, Layout, Review, Tabs } from '@/components';
import Seo from '@/components/Seo';

const tabs = [
  { name: 'Lägenhet', value: 'item' },
  { name: 'Omdömen', value: 'reviews' },
  { name: 'Bilder', value: 'photos' },
];

const reviews = [
  {
    id: 1,
    title: 'This is the best white t-shirt out there',
    rating: 3,
    content: `
      <p>I've searched my entire life for a t-shirt that reflects every color in the visible spectrum. Scientists said it couldn't be done, but when I look at this shirt, I see white light bouncing right back into my eyes. Incredible!</p>
    `,
    author: 'Mark Edwards',
    avatar:
      'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixqx=oilqXxSqey&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    id: 2,
    title: 'Adds the perfect variety to my wardrobe',
    rating: 4,
    content: `
      <p>I used to be one of those unbearable minimalists who only wore the same black v-necks every day. Now, I have expanded my wardrobe with three new crewneck options! Leaving off one star only because I wish the heather gray was more gray.</p>
    `,
    author: 'Blake Reid',
    avatar:
      'https://images.unsplash.com/photo-1520785643438-5bf77931f493?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.5&w=256&h=256&q=80',
  },
  {
    id: 3,
    title: 'All good things come in 6-Packs',
    rating: 3,
    content: `
      <p>Tasty beverages, strong abs that will never be seen due to aforementioned tasty beverages, and these Basic Tees!</p>
    `,
    author: 'Ben Russel',
    avatar:
      'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
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
            <p className='text-med ml-2 text-white'>
              (3.8) based on {reviews.length} reviews
            </p>
          </div>
        </Banner>
        <section className='mx-auto max-w-7xl py-4 px-4 md:py-6 lg:py-8'>
          <div className='grid grid-cols-6 gap-3 md:gap-5'>
            <div className='col-span-6 min-h-screen rounded bg-white py-6 shadow md:col-span-3 xl:col-span-2'>
              <>
                <h4 className='text-center text-xl font-extrabold tracking-tight text-gray-700 sm:text-3xl'>
                  Betyg
                </h4>
                <dl className=' mt-4 space-y-4  '></dl>
              </>
            </div>
            <div className='col-span-6 rounded  md:col-span-3 xl:col-span-4'>
              <Tabs
                tabs={tabs}
                currentTab={currentTab}
                setCurrentTab={(tab) => setCurrentTab(tab)}
              />
              {currentTab == 'reviews' && (
                <section>
                  {reviews.map((review) => {
                    return (
                      <Review
                        key={review.id}
                        title={review.title}
                        id={review.id}
                        content={review.content}
                        author={{ avatar: review.avatar, name: review.author }}
                        rating={review.rating}
                      />
                    );
                  })}
                </section>
              )}
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
