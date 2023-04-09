import React, { useEffect, useState } from 'react';
import { BsFillArrowUpCircleFill } from 'react-icons/bs';

import clsxm from '@/lib/clsxm';

export const BackToTop = () => {
  const [isShown, setIsShown] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      window.pageYOffset > 300 ? setIsShown(true) : setIsShown(false);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      className={clsxm(
        isShown ? 'fixed' : 'hidden',
        ' bottom-6 right-6  max-w-fit animate-bounce cursor-pointer items-center justify-center rounded-full bg-yellow-500 p-4 shadow'
      )}
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
    >
      <BsFillArrowUpCircleFill size={20} className='text-white' />
    </div>
  );
};
