import { Banner, HomeSection, SearchBar } from '@/components';
import { Layout } from '@/components';
import Seo from '@/components/Seo';

export default function HomePage() {
  return (
    <Layout>
      <Seo templateTitle='Din insyn i hyresmarknaden' />

      <main>
        <Banner>
          <h1 className='pb-4 text-xl font-bold tracking-tight text-white sm:text-5xl md:pb-8'>
            Var vill du bo?
          </h1>
          <SearchBar />
        </Banner>
        <HomeSection />
      </main>
    </Layout>
  );
}
