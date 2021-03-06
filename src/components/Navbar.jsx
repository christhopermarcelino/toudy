import { Fragment } from 'react';
import Image from 'next/image';
import { Disclosure, Menu, Transition } from '@headlessui/react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import { classNames } from '@/lib/helpers';
import { useRouter } from 'next/router';
import Link from 'next/link';

export default function Navbar() {
  const router = useRouter();
  const currentPath = router.pathname;

  return (
    <Disclosure as='nav' className='sticky top-0 z-50 bg-white shadow'>
      {({ open }) => (
        <>
          <div className='px-2 mx-auto max-w-7xl sm:px-6 lg:px-8 '>
            <div className='relative flex justify-between h-16'>
              <div className='flex items-center justify-center flex-1 sm:items-stretch sm:justify-start'>
                <div className='flex items-center flex-shrink-0'>
                  <Link href='/'>
                    <a>
                      <h1 className='text-lg font-bold text-dark'>
                        Ajar<span className='text-secondary'>in.</span>
                      </h1>
                    </a>
                  </Link>
                </div>
              </div>
              <div className='absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0'>
                <div className='hidden sm:ml-6 sm:flex sm:space-x-8'>
                  <Link href='/'>
                    <a
                      className={`inline-flex items-center px-1 pt-1 text-sm font-medium ${
                        currentPath === '/'
                          ? 'border-gray-500 border-b-2 text-gray-900'
                          : 'text-gray-500 border-transparent hover:border-gray-300 hover:text-gray-700 border-b-2'
                      }  `}
                    >
                      Beranda
                    </a>
                  </Link>
                  <Link href='/peralatan'>
                    <a
                      className={`inline-flex items-center px-1 pt-1 text-sm font-medium ${
                        currentPath === '/peralatan'
                          ? 'border-gray-500 border-b-2 text-gray-900'
                          : 'text-gray-500 border-transparent hover:border-gray-300 hover:text-gray-700 border-b-2'
                      }  `}
                    >
                      Peralatan
                    </a>
                  </Link>
                  <Link href='/tentang-kami'>
                    <a
                      className={`inline-flex items-center px-1 pt-1 text-sm font-medium ${
                        currentPath === '/tentang-kami'
                          ? 'border-gray-500 border-b-2 text-gray-900'
                          : 'text-gray-500 border-transparent hover:border-gray-300 hover:text-gray-700 border-b-2'
                      }  `}
                    >
                      Tentang kami
                    </a>
                  </Link>
                  <Link href='/informasi'>
                    <a
                      className={`inline-flex items-center px-1 pt-1 text-sm font-medium ${
                        currentPath === '/informasi'
                          ? 'border-gray-500 border-b-2 text-gray-900'
                          : 'text-gray-500 border-transparent hover:border-gray-300 hover:text-gray-700 border-b-2'
                      }  `}
                    >
                      Informasi
                    </a>
                  </Link>
                </div>

                <div className='relative flex ml-8 text-sm bg-white rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500'>
                  <Link href='/profil'>
                    <a>
                      <span className='sr-only'>Open user menu</span>
                      <Image
                        className='w-8 h-8 rounded-full'
                        src='/images/profile_pic.png'
                        alt='Profile Pciture'
                        height='36'
                        width='36'
                      />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className='sm:hidden'>
            <div className='pt-2 pb-4 space-y-1'>
              <Link href='/'>
                <a
                  className={`block pl-3 pr-4 py-2 border-l-4 text-base font-medium ${
                    currentPath === '/'
                      ? 'bg-gray-50 border-gray-500 text-gray-700 '
                      : 'border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700'
                  }`}
                >
                  Beranda
                </a>
              </Link>
              <Link href='/peralatan'>
                <a
                  className={`block pl-3 pr-4 py-2 border-l-4 text-base font-medium ${
                    currentPath === '/peralatan'
                      ? 'bg-gray-50 border-gray-500 text-gray-700 '
                      : 'border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700'
                  }`}
                >
                  Peralatan
                </a>
              </Link>
              <Link href='/tentang-kami'>
                <a
                  className={`block pl-3 pr-4 py-2 border-l-4 text-base font-medium ${
                    currentPath === '/tentang-kami'
                      ? 'bg-gray-50 border-gray-500 text-gray-700 '
                      : 'border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700'
                  }`}
                >
                  Tentang kami
                </a>
              </Link>

              <Link href='/informasi'>
                <a
                  className={`block pl-3 pr-4 py-2 border-l-4 text-base font-medium ${
                    currentPath === '/informasi'
                      ? 'bg-gray-50 border-gray-500 text-gray-700 '
                      : 'border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700'
                  }`}
                >
                  Informasi
                </a>
              </Link>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
