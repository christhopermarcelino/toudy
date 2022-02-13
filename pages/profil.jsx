import Head from 'next/head';
import Image from 'next/image';
import { useState } from 'react';

import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import BottomBorderInput from '@/components/BottomBorderInput';
import SideInput from '@/components/SideInput';

export default function Profil() {
  const [isChangingPassword, setIsChangingPassword] = useState(false);
  const [isEditingProfile, setIsEditingProfile] = useState(false);

  return (
    <>
      <Head />
      <Navbar />
      <main className='px-2 mx-auto max-w-7xl sm:px-6 lg:px-8'>
        <section className='flex min-h-main'>
          <div className='flex flex-col justify-center items-center flex-[2_2_0%]'>
            <div className='relative w-3/4 h-64 mb-6 rounded-full'>
              <Image
                src='/images/profile_pic.png'
                alt='Profile picture'
                layout='fill'
                objectFit='contain'
              />
            </div>
            <h2 className='mb-12'>Rudi</h2>
            {!isEditingProfile && !isChangingPassword && (
              <>
                <button
                  className='px-6 py-2 mb-4 font-semibold rounded-lg w-fit bg-tertiary hover:bg-blue-200'
                  onClick={() => setIsEditingProfile(!isEditingProfile)}
                >
                  Edit profil
                </button>
                <button
                  className='px-6 py-2 font-semibold rounded-lg w-fit bg-tertiary hover:bg-blue-200'
                  onClick={() => setIsChangingPassword(!isChangingPassword)}
                >
                  Ganti kata sandi
                </button>
              </>
            )}
            {isEditingProfile && !isChangingPassword && (
              <>
                <button className='px-6 py-2 mb-4 font-semibold rounded-lg w-fit bg-tertiary hover:bg-blue-200'>
                  Simpan Perubahan
                </button>
                <button
                  className='px-6 py-2 mb-4 font-semibold rounded-lg ring ring-blue-200 w-fit hover:bg-tertiary hover:ring-0'
                  onClick={() => {
                    setIsEditingProfile(false);
                    setIsChangingPassword(false);
                  }}
                >
                  Batal
                </button>
              </>
            )}
          </div>

          <div className='flex-[3_3_0%] flex flex-col justify-center'>
            {!isChangingPassword ? (
              <>
                <BottomBorderInput label='Nama lengkap' id='nama_lengkap' />
                <BottomBorderInput label='Email' id='email' type='email' />
                <BottomBorderInput label='Instansi' id='instansi' />
              </>
            ) : (
              <>
                <SideInput label='Password Lama' id='old_password' />
                <SideInput label='Password Baru' id='new_password' />
                <SideInput
                  label='Konfirmasi Password Baru'
                  id='new_password_confirmation'
                />
                <div className='text-right lg:space-x-4'>
                  <button
                    className='px-6 py-2 mt-12 font-semibold rounded-lg ring-blue-300 hover:ring-0 hover:bg-tertiary ring w-fit'
                    onClick={() => {
                      setIsEditingProfile(false);
                      setIsChangingPassword(false);
                    }}
                  >
                    Batal
                  </button>
                  <button className='px-6 py-2 mt-12 font-semibold rounded-lg bg-tertiary w-fit hover:bg-blue-200'>
                    Simpan Perubahan
                  </button>
                </div>
              </>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
