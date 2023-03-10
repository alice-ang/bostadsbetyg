import * as React from 'react';
import { AiFillStar } from 'react-icons/ai';

import clsxm from '@/lib/clsxm';

import { Banner, Layout } from '@/components';
import Seo from '@/components/Seo';

export default function ItemPage() {
  return (
    <Layout>
      <Seo templateTitle='' />

      <main>
        <section className='bg-white'>
          <Banner>
            {' '}
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
                (3.8) based on 4 reviews
              </p>
            </div>
          </Banner>
        </section>
      </main>
    </Layout>
  );
}
