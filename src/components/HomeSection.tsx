import Image from 'next/image';

const transferFeatures = [
  {
    id: 1,
    name: 'Sök igenom områden',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    emoji: '🌍',
  },
  {
    id: 2,
    name: 'Se vad andra hyresgäster säger',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    emoji: '💬',
  },
  {
    id: 3,
    name: 'Dela dina erfarenheter',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    emoji: '📝',
  },
];

export const HomeSection = () => {
  return (
    <div className='overflow-hidden bg-gray-50 py-8 '>
      <div className='relative mx-auto max-w-xl px-4 sm:px-6 lg:max-w-7xl lg:px-8'>
        <div className=' relative text-center'>
          <h3 className='text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl'>
            Lorem ipsum dolor sit amet
          </h3>
        </div>

        <div className='relative  lg:grid lg:grid-cols-2 lg:items-center lg:gap-8'>
          <div className='relative'>
            <dl className='mt-10 space-y-10'>
              {transferFeatures.map((item) => (
                <div key={item.id} className='relative'>
                  <dt>
                    <div className='absolute flex h-12 w-12 items-center justify-center rounded-md bg-yellow-500 shadow-md'>
                      <span
                        role='img'
                        aria-label={item.name}
                        aria-hidden='true'
                        className=' text-2xl'
                      >
                        {item.emoji}
                      </span>
                    </div>
                    <p className='ml-16 text-lg font-medium leading-6 text-gray-900'>
                      {item.name}
                    </p>
                  </dt>
                  <dd className='mt-2 ml-16 text-base text-gray-500'>
                    {item.description}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <div
            className='relative -mx-4 mt-10 min-h-full lg:mt-0 '
            aria-hidden='true'
          >
            <div className='object-fit'>
              <Image src='/feedback.svg' alt='feedback' fill />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
