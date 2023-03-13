import * as React from 'react';

import {
  Layout,
  Pricing,
  PrimaryFeatures,
  SecondaryFeatures,
} from '@/components';
import Seo from '@/components/Seo';

export default function BusinessPage() {
  return (
    <Layout>
      <Seo templateTitle='För företag' />

      <main>
        <section className='bg-white'>
          <PrimaryFeatures />
          <Pricing />

          <SecondaryFeatures />
        </section>
      </main>
    </Layout>
  );
}
