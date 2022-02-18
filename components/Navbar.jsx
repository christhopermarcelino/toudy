import Image from 'next/image';
import { Disclosure } from '@headlessui/react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { useEffect } from 'react';
import axios from 'axios';

import { useAuth } from '@/context/AuthProvider';
import { useDispatch } from '@/context/AuthProvider';

export default function Navbar() {
  const user = useAuth();
  const dispatch = useDispatch();
  const router = useRouter();
  const currentPath = router.pathname;

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      axios
        .post(
          '/user/get-info',
          {},
          {
            headers: {
              authorization: `Bearer ${token}`,
            },
          }
        )
        .then((res) => {
          dispatch(res.data.data);
        })
        .catch((err) => {});
    }
  }, []);

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
                {user ? (
                  <div className='relative flex ml-8 text-sm bg-white rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500'>
                    <Link href='/profil'>
                      <a>
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
                      </a>
                    </Link>
                  </div>
                ) : (
                  <Link href='/auth'>
                    <a>
                      <button
                        type='button'
                        className='inline-flex items-center px-4 py-2 ml-8 text-sm font-medium text-blue-400 border border-transparent rounded-full shadow-sm hover:text-white focus:text-white hover:bg-blue-300 ring-2 ring-blue-400 focus:bg-blue-500'
                      >
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          className='w-5 h-5 mr-2 -ml-1 text-blue-400 hover:text-white focus:text-white'
                          aria-hidden='true'
                          fill='none'
                          viewBox='0 0 24 24'
                          stroke='currentColor'
                        >
                          <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth={2}
                            d='M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1'
                          />
                        </svg>
                        {/* <MailIcon className="w-5 h-5 mr-2 -ml-1" aria-hidden="true" /> */}
                        Masuk
                      </button>
                    </a>
                  </Link>
                )}
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
