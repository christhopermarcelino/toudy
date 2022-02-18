import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { Fragment } from 'react';
import { Disclosure, Menu, Transition } from '@headlessui/react';
import { BellIcon, MenuIcon, XIcon } from '@heroicons/react/outline';

import { useAuth, useDispatch } from '@/context/AuthProvider';

import { classNames } from '@/lib/helpers';

export default function Example() {
  const router = useRouter();
  const currentPath = router.pathname;

  const user = useAuth();
  const dispatch = useDispatch();

  const signOutHandle = () => {
    localStorage.removeItem('token');
    dispatch(null);
    if (currentPath.includes('/profil')) router.push('/auth');
  };

  return (
    <Disclosure as='nav' className='bg-white shadow'>
      {({ open }) => (
        <>
          <div className='px-4 mx-auto max-w-7xl sm:px-6 lg:px-8'>
            <div className='flex justify-between h-16'>
              <div className='flex justify-center w-full sm:justify-between'>
                <div className='flex items-center flex-shrink-0'>
                  <Link href='/'>
                    <a>
                      <h1 className='text-lg font-bold text-dark'>
                        Ajar<span className='text-secondary'>in.</span>
                      </h1>
                    </a>
                  </Link>
                </div>
                <div className='absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0'>
                  <div className='hidden sm:mr-auto sm:flex sm:space-x-8'>
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
                </div>
              </div>
              <div className='hidden sm:ml-6 sm:flex sm:items-center'>
                {/* Profile dropdown */}
                <Menu as='div' className='relative ml-3'>
                  {({ open }) => (
                    <>
                      <div>
                        <Menu.Button className='flex text-sm bg-white rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500'>
                          <span className='sr-only'>Open user menu</span>
                          <Image
                            src={
                              user?.image != null
                                ? '/images/profile_pic'
                                : '/icons/person.svg'
                            }
                            className='w-8 h-8 rounded-full'
                            alt='Profile Pciture'
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
                          className='absolute right-0 z-50 w-48 py-1 mt-2 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'
                        >
                          <Menu.Item>
                            {({ active }) => (
                              <Link href='/profil'>
                                <a
                                  className={classNames(
                                    active ? 'bg-gray-100' : '',
                                    'block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100'
                                  )}
                                >
                                  Profil
                                </a>
                              </Link>
                            )}
                          </Menu.Item>
                          <Menu.Item>
                            {({ active }) => (
                              <button
                                onClick={signOutHandle}
                                className={classNames(
                                  active ? 'bg-gray-100' : '',
                                  'block px-4 py-2 text-sm text-gray-700 w-full text-left'
                                )}
                              >
                                Sign out
                              </button>
                            )}
                          </Menu.Item>
                        </Menu.Items>
                      </Transition>
                    </>
                  )}
                </Menu>
              </div>
              <div className='flex items-center -mr-2 sm:hidden'>
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
            </div>
          </div>

          <Disclosure.Panel className='sm:hidden'>
            <div className='pt-2 pb-3 space-y-1'>
              <Link href='/'>
                <a
                  // className={currentPath === '/'}
                  className={classNames(
                    currentPath === '/'
                      ? 'bg-gray-50 border-gray-500 border-l-4'
                      : '',
                    'block py-2 pl-3 pr-4 text-base font-medium text-gray-700 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700'
                  )}
                  // className='block py-2 pl-3 pr-4 text-base font-medium text-gray-700 border-l-4 border-gray-500 bg-gray-50 hover:border-gray-300 hover:text-gray-700'
                >
                  Beranda
                </a>
              </Link>
              <Link href='/peralatan'>
                <a
                  className={classNames(
                    currentPath === '/peralatan'
                      ? 'bg-gray-50 border-gray-500 border-l-4'
                      : '',
                    'block py-2 pl-3 pr-4 text-base font-medium text-gray-700 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700'
                  )}
                >
                  Peralatan
                </a>
              </Link>
              <Link href='/tentang-kami'>
                <a
                  className={classNames(
                    currentPath === '/tentang-kami'
                      ? 'bg-gray-50 border-gray-500 border-l-4'
                      : '',
                    'block py-2 pl-3 pr-4 text-base font-medium text-gray-700 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700'
                  )}
                >
                  Tentang kami
                </a>
              </Link>
              <Link href='/informasi'>
                <a
                  className={classNames(
                    currentPath === '/informasi'
                      ? 'bg-gray-50 border-gray-500 border-l-4'
                      : '',
                    'block py-2 pl-3 pr-4 text-base font-medium text-gray-700 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700'
                  )}
                >
                  Informasi
                </a>
              </Link>
            </div>
            <div className='pt-4 pb-3 border-t border-gray-200'>
              <div className='flex items-center px-4'>
                <div className='flex-shrink-0'>
                  <Image
                    src={
                      user?.image != null
                        ? '/images/profile_pic'
                        : '/icons/person.svg'
                    }
                    className='w-8 h-8 rounded-full'
                    alt='Profile Pciture'
                    height='36'
                    width='36'
                  />
                </div>
                <div className='ml-3'>
                  <div className='text-base font-medium text-gray-800'>
                    {user?.username}
                  </div>
                  <div className='text-sm font-medium text-gray-500'>
                    {user?.email}
                  </div>
                </div>
              </div>
              <div className='mt-3 space-y-1'>
                <Link href='/profil'>
                  <a
                    className={classNames(
                      currentPath === '/profil'
                        ? 'bg-gray-50 border-gray-500 border-l-4'
                        : '',
                      'block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100'
                    )}
                  >
                    Profil
                  </a>
                </Link>
                <button
                  onClick={signOutHandle}
                  className='block w-full px-4 py-2 text-base font-medium text-left text-gray-500 hover:text-gray-800 hover:bg-gray-100'
                >
                  Sign out
                </button>
              </div>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
