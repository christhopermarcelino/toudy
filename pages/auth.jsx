import Head from 'next/head';
import { useState } from 'react';
import BottomBorderInput from '@/components/BottomBorderInput';

export default function Auth() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <>
      <Head></Head>
      <main className='md:flex-row min-h-main bg-white flex flex-col items-center'>
        <h1 className='flex-1 flex text-dark font-bold text-6xl md:text-8xl justify-center items-center'>
          Ajarin.
        </h1>
        <div className='flex-1 flex justify-center items-center'>
          <div className='p-10 rounded-lg bg-blue-200/75 backdrop-blur-md md:w-1/2 shadow-lg'>
            <div className='lg:flex-row flex-col justify-start pb-12 flex lg:space-x-8'>
              <button
                className={`font-semibold text-dark text-2xl ${
                  isLogin && 'underline-offset-4 underline'
                }`}
                onClick={() => setIsLogin(!isLogin)}
              >
                Masuk
              </button>
              <button
                className={`font-semibold text-dark text-2xl ${
                  !isLogin && 'underline-offset-4 underline'
                }`}
                onClick={() => setIsLogin(!isLogin)}
              >
                Daftar
              </button>
            </div>

            {isLogin ? (
              <form action='#' method='POST'>
                <BottomBorderInput label='Nama pengguna' id='nama_pengguna' />
                <BottomBorderInput
                  label='Kata sandi'
                  id='kata_sandi'
                  type='password'
                />
                <div className='flex justify-center'>
                  <button
                    type='submit'
                    className='rounded-full px-10 py-3 mt-8 bg-white font-semibold text-dark '
                  >
                    Masuk
                  </button>
                </div>
              </form>
            ) : (
              <form action='#' method='POST'>
                <BottomBorderInput label='Nama pengguna' id='nama_pengguna' />
                <BottomBorderInput label='Email' id='email' type='email' />
                <BottomBorderInput
                  label='Kata sandi'
                  id='kata_sandi'
                  type='password'
                />
                <div className='flex justify-center'>
                  <button
                    type='submit'
                    className='rounded-full px-10 py-3 mt-8 bg-white font-semibold text-dark '
                  >
                    Daftar
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </main>
    </>
  );
}
