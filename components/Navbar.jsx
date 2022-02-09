import { Fragment } from 'react';
import Image from 'next/image';
import { Disclosure, Menu, Transition } from '@headlessui/react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import classNames from '@/lib/helpers';
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
              <div className='absolute inset-y-0 left-0 flex items-center sm:hidden'>
                {/* Mobile menu button */}
                <Disclosure.Button className='inline-flex items-center justify-center p-2 text-gray-400 rounded-md hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500'>
                  <span className='sr-only'>Open main menu</span>
                  {open ? (
                    <XIcon className='block w-6 h-6' aria-hidden='true' />
                  ) : (
                    <MenuIcon className='block w-6 h-6' aria-hidden='true' />
                  )}
                </Disclosure.Button>
              </div>
              <div className='flex items-center justify-center flex-1 sm:items-stretch sm:justify-start'>
                <div className='flex items-center flex-shrink-0'>
                  <h1 className='text-lg font-bold text-dark'>Ajarin.</h1>
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

                <Menu as='div' className='relative ml-8'>
                  {({ open }) => (
                    <>
                      <div>
                        <Menu.Button className='flex text-sm bg-white rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500'>
                          <span className='sr-only'>Open user menu</span>

                          <Image
                            className='w-8 h-8 rounded-full'
                            src='/images/profile_pic.png'
                            alt=''
                            height='36'
                            width='36'
                          />
                        </Menu.Button>
                      </div>
                      <Transition
                        show={open}
                        as={Fragment}
                        enter='transition ease-out duration-200'
                        enterFrom='transform opacity-0 scale-95'
                        enterTo='transform opacity-100 scale-100'
                        leave='transition ease-in duration-75'
                        leaveFrom='transform opacity-100 scale-100'
                        leaveTo='transform opacity-0 scale-95'
                      >
                        <Menu.Items
                          static
                          className='absolute right-0 w-48 py-1 mt-2 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'
                        >
                          <Menu.Item>
                            {({ active }) => (
                              <a
                                href='#'
                                className={classNames(
                                  active ? 'bg-gray-100' : '',
                                  'block px-4 py-2 text-sm text-gray-700'
                                )}
                              >
                                Your Profile
                              </a>
                            )}
                          </Menu.Item>
                          <Menu.Item>
                            {({ active }) => (
                              <a
                                href='#'
                                className={classNames(
                                  active ? 'bg-gray-100' : '',
                                  'block px-4 py-2 text-sm text-gray-700'
                                )}
                              >
                                Settings
                              </a>
                            )}
                          </Menu.Item>
                          <Menu.Item>
                            {({ active }) => (
                              <a
                                href='#'
                                className={classNames(
                                  active ? 'bg-gray-100' : '',
                                  'block px-4 py-2 text-sm text-gray-700'
                                )}
                              >
                                Sign out
                              </a>
                            )}
                          </Menu.Item>
                        </Menu.Items>
                      </Transition>
                    </>
                  )}
                </Menu>
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
