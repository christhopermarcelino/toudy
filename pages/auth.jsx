import Head from 'next/head';
import Router from 'next/router';
import { useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';

import { useAuth, useDispatch } from '@/context/AuthProvider';

import BottomBorderInput from '@/components/BottomBorderInput';
import Navbar from '@/components/Navbar';

import data from '../data.js';

export default function Auth() {
  const [isLogin, setIsLogin] = useState(true);
  const auth = useAuth();
  const dispacth = useDispatch();
  const { nama_pengguna, kata_sandi, email } = data;

  const methods = useForm();
  const { handleSubmit } = methods;

  const onLoginSubmit = (data) => {
    const { nama_pengguna: login_username, kata_sandi: login_password } = data;
    if (login_username != nama_pengguna || login_password != kata_sandi) return;
    dispacth({ nama_pengguna, kata_sandi });
    Router.push('/');
  };

  const onRegisterSubmit = (data) => {
    const {
      nama_pengguna: register_username,
      kata_sandi: register_password,
      email: register_email,
    } = data;

    if (
      register_username != nama_pengguna ||
      register_password != kata_sandi ||
      register_email != email
    )
      return;

    Router.push('/auth');
  };

  return (
    <>
      <Head></Head>
      <Navbar />
      <main className='flex flex-col items-center bg-white md:flex-row min-h-main'>
        <h1 className='flex items-center justify-center flex-1 text-6xl font-bold text-dark md:text-8xl'>
          Ajarin.
        </h1>
        <div className='flex items-center justify-center flex-1'>
          <div className='p-10 rounded-lg shadow-lg bg-blue-200/75 backdrop-blur-md md:w-1/2'>
            <div className='flex flex-col justify-start pb-12 lg:flex-row lg:space-x-8'>
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

            <FormProvider {...methods}>
              {isLogin && (
                <form onSubmit={handleSubmit(onLoginSubmit)}>
                  <BottomBorderInput label='Nama pengguna' id='nama_pengguna' />
                  <BottomBorderInput
                    label='Kata sandi'
                    id='kata_sandi'
                    type='password'
                  />
                  <div className='flex justify-center'>
                    <button
                      type='submit'
                      className='px-10 py-3 mt-8 font-semibold bg-white rounded-full text-dark '
                    >
                      Masuk
                    </button>
                  </div>
                </form>
              )}
              {!isLogin && (
                <form onSubmit={handleSubmit(onRegisterSubmit)}>
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
                      className='px-10 py-3 mt-8 font-semibold bg-white rounded-full text-dark '
                    >
                      Daftar
                    </button>
                  </div>
                </form>
              )}
            </FormProvider>
          </div>
        </div>
      </main>
    </>
  );
}
