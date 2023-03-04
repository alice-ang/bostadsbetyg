import { Banner, HomeSection, SearchBar } from '@/components';
import { Layout } from '@/components';
import Seo from '@/components/Seo';

export default function HomePage() {
  return (
    <Layout>
      <Seo templateTitle='Din insyn i hyresmarknaden' />

      <main>
        <Banner src='https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2830&q=80&blend=111827&sat=-100&exp=15&blend-mode=multiply'>
          <h1 className='pb-4 text-xl font-bold tracking-tight text-white sm:text-5xl md:pb-8'>
            Vart vill du bo?
          </h1>
          <SearchBar />
        </Banner>
        <HomeSection />
      </main>
    </Layout>
  );
}
