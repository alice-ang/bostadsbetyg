import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useState } from 'react';
import { GoGraph } from 'react-icons/go';
import { MdClose, MdOutlineDashboard, MdOutlineReviews } from 'react-icons/md';
import {
  RiEmotionHappyFill,
  RiEmotionNormalFill,
  RiEmotionUnhappyFill,
} from 'react-icons/ri';

import clsxm from '@/lib/clsxm';

import { DashboardCard, RoundedButton } from '@/components';
import NextImage from '@/components/NextImage';
import Seo from '@/components/Seo';

const navigation = [
  { name: 'Översikt', icon: MdOutlineDashboard, href: '#', current: true },
  {
    name: 'Omdömen',
    icon: MdOutlineReviews,
    href: '#',
    count: 12,
    current: false,
  },
  { name: 'Rapporter', icon: GoGraph, href: '#', current: false },
];

const projects = [
  {
    id: 1,
    title: 'Positiva',
    icon: RiEmotionHappyFill,
    totalReviews: 12,

    bgColorClass: 'bg-green-500',
  },
  {
    id: 2,
    title: 'Neutrala',
    icon: RiEmotionUnhappyFill,
    totalReviews: 6,

    bgColorClass: 'bg-yellow-500',
  },
  {
    id: 3,
    title: 'Negativa',
    icon: RiEmotionNormalFill,
    totalReviews: 4,

    bgColorClass: 'bg-red-500',
  },
];

export default function DashboardPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <Seo templateTitle='Översikt' />
      <Transition.Root show={sidebarOpen} as={Fragment}>
        <Dialog
          as='div'
          className='relative z-40 lg:hidden'
          onClose={setSidebarOpen}
        >
          <Transition.Child
            as={Fragment}
            enter='transition-opacity ease-linear duration-300'
            enterFrom='opacity-0'
            enterTo='opacity-100'
            leave='transition-opacity ease-linear duration-300'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            <div className='fixed inset-0 bg-gray-600 bg-opacity-75' />
          </Transition.Child>

          <div className='fixed inset-0 z-40 flex'>
            <Transition.Child
              as={Fragment}
              enter='transition ease-in-out duration-300 transform'
              enterFrom='-translate-x-full'
              enterTo='translate-x-0'
              leave='transition ease-in-out duration-300 transform'
              leaveFrom='translate-x-0'
              leaveTo='-translate-x-full'
            >
              <Dialog.Panel className='relative flex w-full max-w-xs flex-1 flex-col bg-white'>
                <Transition.Child
                  as={Fragment}
                  enter='ease-in-out duration-300'
                  enterFrom='opacity-0'
                  enterTo='opacity-100'
                  leave='ease-in-out duration-300'
                  leaveFrom='opacity-100'
                  leaveTo='opacity-0'
                >
                  <div className='absolute top-0 right-0 -mr-12 pt-2'>
                    <button
                      type='button'
                      className='ml-1 flex h-10 w-10 items-center justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white'
                      onClick={() => setSidebarOpen(false)}
                    >
                      <span className='sr-only'>Close sidebar</span>
                      <MdClose size={24} className='text-white' />
                    </button>
                  </div>
                </Transition.Child>
                <div className='h-0 flex-1 overflow-y-auto pt-5 pb-4'>
                  <div className='flex flex-shrink-0 items-center px-4'>
                    LOGO
                  </div>
                  <nav className='mt-5 space-y-1 px-2'>
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={clsxm(
                          item.current
                            ? 'bg-orange-50 text-yellow-900'
                            : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900',
                          'group flex items-center rounded-md px-2 py-2 text-base font-medium'
                        )}
                      >
                        <item.icon
                          className={clsxm(
                            item.current
                              ? 'text-yellow-500'
                              : 'text-gray-400 group-hover:text-gray-500',
                            'mr-4 h-6 w-6 flex-shrink-0'
                          )}
                          aria-hidden='true'
                        />
                        {item.name}
                      </a>
                    ))}
                  </nav>
                </div>
                <div className='flex flex-shrink-0 border-t border-gray-200 p-4'>
                  <div className='flex items-center'>
                    <NextImage
                      height={40}
                      width={40}
                      imgClassName='inline-block rounded-full'
                      src='https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
                      alt=''
                    />
                    <div className='ml-3'>
                      <p className='text-base font-medium text-gray-700 group-hover:text-gray-900'>
                        Tom Cook
                      </p>
                      <p className='text-sm font-medium text-gray-500 group-hover:text-gray-700'>
                        Administratör
                      </p>
                    </div>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
            <div className='w-14 flex-shrink-0'>
              {/* Force sidebar to shrink to fit close icon */}
            </div>
          </div>
        </Dialog>
      </Transition.Root>

      {/* Static sidebar for desktop */}
      <div className='hidden lg:fixed lg:inset-y-0 lg:flex lg:w-64 lg:flex-col'>
        {/* Sidebar component, swap this element with another sidebar if you like */}
        <div className='flex min-h-0 flex-1 flex-col border-r border-gray-200 bg-white px-4'>
          <div className='flex flex-1 flex-col overflow-y-auto pt-5 pb-4'>
            <div className='flex flex-shrink-0 items-center '>Logo</div>
            <nav className='mt-5 flex-1 space-y-1 bg-white'>
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={clsxm(
                    item.current
                      ? 'bg-orange-50 text-yellow-900'
                      : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900',
                    'group flex items-center rounded-md px-2 py-2 text-sm font-medium'
                  )}
                >
                  <item.icon
                    className={clsxm(
                      item.current
                        ? 'text-yellow-500'
                        : 'text-gray-400 group-hover:text-gray-500',
                      'mr-3 h-6 w-6 flex-shrink-0'
                    )}
                    aria-hidden='true'
                  />
                  {item.name}
                </a>
              ))}
            </nav>
            {/* Ad banner */}
            <div className='flex-col items-center justify-center rounded-lg bg-orange-50 p-4 text-center'>
              <div className='flex justify-center pb-2'>
                <RiEmotionHappyFill className='text-yellow-500' size={28} />
              </div>
              <p className='text-l font-semibold text-yellow-700'>
                Uppgradera till premium
              </p>
              <p className='pb-4 text-xs font-medium'>
                Få tillgång till fler funktioner.
              </p>
              <RoundedButton href='#'>Uppgradera</RoundedButton>
            </div>
          </div>
          <div className='flex flex-shrink-0 border-t border-gray-200 p-4'>
            <div className='flex items-center'>
              <div>
                <NextImage
                  height={50}
                  width={50}
                  imgClassName='inline-block rounded-full'
                  src='https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
                  alt=''
                />
              </div>
              <div className='ml-3'>
                <p className='text-sm font-medium text-gray-700 group-hover:text-gray-900'>
                  Tom Cook
                </p>
                <p className='text-xs font-medium text-gray-500 group-hover:text-gray-700'>
                  Administratör
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='flex flex-1 flex-col lg:pl-64'>
        <div className='sticky top-0 z-10 bg-white pl-1 pt-1 sm:pl-3 sm:pt-3 lg:hidden'>
          <button
            type='button'
            className='-ml-0.5 -mt-0.5 inline-flex h-12 w-12 items-center justify-center rounded-md text-gray-500 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-yellow-500'
            onClick={() => setSidebarOpen(true)}
          >
            <span className='sr-only'>Open sidebar</span>
            LOGO
          </button>
        </div>

        {/* CONTENT */}
        <main className='min-h-screen flex-1 bg-gray-50'>
          <div className='py-6 px-6 sm:px-6 md:px-16 md:py-12 lg:py-16'>
            <div className='mx-auto max-w-7xl '>
              <h2 className=' text-4xl font-normal text-gray-900'>
                Välkommen{' '}
                <span className=' text-yellow-500'>Fastigets AB Balder</span>
              </h2>
              <p className='font-l text-sm text-gray-500 '>
                Lorem ipsum dolor sit amet
              </p>
            </div>
            <div className='mx-auto max-w-7xl pt-12'>
              <div className='my-6 '>
                <ul
                  role='list'
                  className='mt-3 grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-3'
                >
                  {projects.map((project) => (
                    <li
                      key={project.id}
                      className='relative col-span-1 flex rounded-md shadow-sm'
                    >
                      <div
                        className={clsxm(
                          project.bgColorClass,
                          'flex items-center justify-center rounded-l-md p-4 text-white'
                        )}
                      >
                        <project.icon
                          className={clsxm('h-6 w-6 ')}
                          aria-hidden='true'
                        />
                      </div>
                      <div className='flex flex-1 items-center justify-between truncate rounded-r-md border-t border-r border-b border-gray-200 bg-white'>
                        <div className='flex-1 truncate px-4 py-2 text-sm'>
                          <p className='font-medium text-gray-900 hover:text-gray-600'>
                            {project.title}
                          </p>
                          <p className=' text-gray-500'>
                            {project.totalReviews} Omdömen
                          </p>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              <div className='grid grid-cols-3 gap-4'>
                <DashboardCard>
                  <p className='text-lg font-semibold'>Lorem ipsum</p>
                  <p className='text-sm text-gray-500'>
                    Lorem ipsum dolor sit amet
                  </p>
                </DashboardCard>
                <DashboardCard className='col-span-2'>
                  <p className='text-lg font-semibold'>Lorem ipsum</p>
                  <p className='text-sm text-gray-500'>
                    Lorem ipsum dolor sit amet
                  </p>
                  <RoundedButton href='#'>Uppgradera</RoundedButton>
                </DashboardCard>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
