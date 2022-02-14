import Head from 'next/head';
import Image from 'next/image';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function EventDetail() {
  return (
    <>
      <Head>
        <title>Bincang Guru Inovatif</title>
      </Head>
      <Navbar />
      <main className='px-2 mx-auto max-w-7xl sm:px-6 lg:px-8'>
        <section className='py-12 min-h-main space-y-6'>
          <h1 className='text-dark md:px-0 px-4 text-3xl md:text-5xl'>
            Bincang Guru Inovatif
          </h1>
          <div className='md:flex space-x-4 md:space-x-8'>
            <div className='flex-1 relative px-4 md:px-0 md:w-4/5'>
              <Image
                src='/images/bincang_guru_inovatif.png'
                alt='Bincang Guru Inovatif'
                layout='responsive'
                width='100%'
                height='100%'
                objectFit='contain'
              />
            </div>
            <div className='flex-1 space-y-4 font-medium flex flex-col justify-center'>
              <div className='space-y-1'>
                <p>Program Bincang Guru Inovatif #3 pada:</p>
                <p className='flex items-center'>
                  <span>
                    <Image
                      src='/icons/calendar.svg'
                      alt='Calendar'
                      width='32'
                      height='32'
                    />
                  </span>
                  Rabu, 24 Maret 2021
                </p>
                <p className='flex items-center'>
                  <span>
                    <Image
                      src='/icons/clock.svg'
                      alt='Calendar'
                      width='32'
                      height='32'
                    />
                  </span>
                  14.00 - 14.50 WIB
                </p>
                <p className='flex items-center'>
                  <span>
                    <Image
                      src='/icons/calendar.svg'
                      alt='Calendar'
                      width='32'
                      height='32'
                    />
                  </span>
                  Via Live Zoom
                </p>
              </div>
              <div className='space-y-1'>
                <p>Bersama:</p>
                <p className='flex items-center'>
                  <span>
                    <Image
                      src='/icons/calendar.svg'
                      alt='Calendar'
                      width='32'
                      height='32'
                    />
                  </span>
                  Fadly Agustimahir S.Pd
                </p>
                <p className='lg:w-1/2'>
                  International Exchange Center Staff Yamanashi Gakuin
                  University
                </p>
              </div>
              <p className='uppercase text-[#007BC3] font-semibold'>
                <strong>PENDAFTARAN GRATIS DAN BERSETIFIKAT!</strong>
              </p>
            </div>
          </div>
          <p className='text-lg px-4 md:px-0'>
            Komunitas Sahabat Berbagi Bersama Rumah Belajar, mengundang
            Bapak/Ibu untuk mengikuti Webinar dan Workshop 32 JP Pemanfaatan TIK
            dalam Pembelajaran terintegrasi Portal Rumah Belajar secara daring
            tgl 28-30 Januari 2022.
          </p>
          <button className='bg-tertiary py-2 px-6 rounded-lg font-semibold text-lg mx-4 md:mx-0'>
            Daftar Sekarang!
          </button>
        </section>
      </main>
      <Footer />
    </>
  );
}
