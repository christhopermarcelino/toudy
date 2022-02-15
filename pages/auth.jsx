import Head from 'next/head';
import Router from 'next/router';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { FormProvider, useForm } from 'react-hook-form';

import { useAuth, useDispatch } from '@/context/AuthProvider';

import BottomBorderInput from '@/components/BottomBorderInput';
import Navbar from '@/components/Navbar';

export default function Auth() {
  const [isLogin, setIsLogin] = useState(true);
  const auth = useAuth();
  const dispacth = useDispatch();

  const methods = useForm();
  const { handleSubmit } = methods;

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      axios
        .post('https://toudy.herokuapp.com/api/user/get-info', {
          token,
        })
        .then((res) => dispacth(res.data))
        .catch((err) => alert(err.message));
    }
  }, []);

  const onLoginSubmit = (data) => {
    const { username, password } = data;

    if (!username || !password) return;

    axios
      .post('https://toudy.herokuapp.com/api/user/login', {
        username,
        password,
      })
      .then((res) => {
        localStorage.setItem('token', res.token);
        axios
          .post('https://toudy.herokuapp.com/api/user/get-info', {
            token,
          })
          .then((res) => dispacth(res.data))
          .catch((err) => alert(err.message));
        Router.push('/');
      })
      .catch((err) => alert(err.message));
  };

  const onRegisterSubmit = (data) => {
    const { username, password, email } = data;

    console.log(data);

    if (!username || !password || !email) return;

    axios
      .post('https://toudy.herokuapp.com/api/user/register', {
        username,
        email,
        password,
      })
      .then((res) => Router.push('/auth'))
      .catch((err) => alert(err.message));
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
                  <BottomBorderInput label='Nama pengguna' id='username' />
                  <BottomBorderInput
                    label='Kata sandi'
                    id='password'
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
                  <BottomBorderInput label='Nama pengguna' id='username' />
                  <BottomBorderInput label='Email' id='email' type='email' />
                  <BottomBorderInput
                    label='Kata sandi'
                    id='password'
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
