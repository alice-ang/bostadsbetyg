import * as React from 'react';

import { Banner, Layout, RatingsContent, Steps } from '@/components';
import Seo from '@/components/Seo';

export default function EvaluatePage() {
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
          <Steps items={[0, 1, 2]} currentStep={1} />
          <RatingsContent />
        </section>
      </main>
    </Layout>
  );
}
