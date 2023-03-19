import { BackToTop, Footer, Header } from '@/components';

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />

      {children}
      <Footer />
      <BackToTop />
    </>
  );
};
