import * as React from 'react';
import { useState } from 'react';

import clsxm from '@/lib/clsxm';

import { Banner, Layout, StarRatings } from '@/components';
import Seo from '@/components/Seo';

const ratings = [
  {
    title: 'läget',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ut felis eros.',
    icon: '📍',
    ref: React.createRef<HTMLDivElement>(),
  },
  {
    title: 'området',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ut felis eros.',
    icon: '🍃',
    ref: React.createRef<HTMLDivElement>(),
  },
  {
    title: 'lägenheten',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ut felis eros.',
    icon: '🏙️',
    ref: React.createRef<HTMLDivElement>(),
    children: [
      {
        title: 'kök',
        description: ' Aenean ac orci lorem.',
        icon: '🍴',
      },
      {
        title: 'badrum',
        description: ' Aenean ac orci lorem.',
        icon: '🛁',
      },
    ],
  },
  {
    title: 'kundservicen',
    ref: React.createRef<HTMLDivElement>(),
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ut felis eros. Aenean ac orci lorem.',
    icon: '📞',
  },
];

export default function EvaluatePage() {
  const [currentIdx, setCurrentIdx] = useState(0);
  return (
    <Layout>
      <Seo templateTitle='Betygsätt {{item}}' />
      <Banner>
        <p className='block text-sm text-white'>Skövdebostäder</p>
        <h2 className=' text-3xl font-bold text-white sm:text-4xl'>
          Norra trängallén 3
        </h2>
      </Banner>
      <main className='bg-slate-50 lg:py-16'>
        <section className='mx-auto w-full bg-white p-4 shadow md:p-6 lg:w-1/2 lg:p-8'>
          {ratings.map((step, i) => {
            return (
              <div
                className={clsxm(
                  i <= currentIdx
                    ? 'opacity-1 pointer-events-auto'
                    : 'pointer-events-none opacity-10',
                  'flex flex-wrap items-center justify-between pt-4'
                )}
                ref={step.ref}
                key={i}
              >
                <div className='flex w-full flex-col md:w-1/2  '>
                  <div className=' inline-flex text-2xl font-medium '>
                    Betygsätt
                    <span className='ml-2 text-yellow-500'>{step.title}</span>
                    <span
                      role='img'
                      aria-label={step.title}
                      aria-hidden='false'
                      className='ml-2 text-2xl'
                    >
                      {step.icon}
                    </span>
                  </div>
                  <p>{step.description}</p>
                  {step.children &&
                    step.children.map((child, j) => {
                      return (
                        <div
                          className='flex w-full flex-wrap items-center justify-between pt-2 '
                          key={j}
                        >
                          <div className='inline-flex items-center  text-xl font-medium'>
                            <span
                              role='img'
                              aria-label={child.title}
                              aria-hidden='false'
                              className='text-2xl'
                            >
                              {child.icon}
                            </span>
                            <span className='ml-2 text-yellow-500'>
                              {child.title}
                            </span>
                          </div>
                          <StarRatings
                            className='h-6 w-6'
                            onRate={() => {
                              if (j == step.children.length - 1) {
                                setCurrentIdx(i + 1);

                                ratings[
                                  i != ratings.length - 1 ? i + 1 : i
                                ].ref.current?.scrollIntoView({
                                  behavior: 'smooth',
                                });
                              }
                            }}
                          />
                        </div>
                      );
                    })}
                </div>

                {!step.children ? (
                  <StarRatings
                    onRate={() => {
                      setCurrentIdx(i + 1);

                      ratings[
                        i != ratings.length - 1 ? i + 1 : i
                      ].ref.current?.scrollIntoView({
                        behavior: 'smooth',
                      });
                    }}
                  />
                ) : null}
              </div>
            );
          })}
        </section>
      </main>
    </Layout>
  );
}
