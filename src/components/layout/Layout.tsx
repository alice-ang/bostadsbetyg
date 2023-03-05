import { Header } from '@/components';

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='relative'>
      <div className='sticky top-0 left-0 right-0'>
        <Header />
      </div>

      {children}
    </div>
  );
};
