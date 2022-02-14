import Head from 'next/head';
import Image from 'next/image';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function EventDetail() {
  return (
    <>
      <Head>
        <title>Persiapan Tatap Muka</title>
      </Head>
      <Navbar />
      <main className='px-2 mx-auto max-w-7xl sm:px-6 lg:px-8'>
        <section className='py-12 min-h-main space-y-6'>
          <h1 className='text-dark md:px-0 px-4 text-3xl md:text-5xl'>
            Kesiapan Pelaksanaan Pembelajaran Tatap Muka Tahun 2022
          </h1>
          <div className='md:flex md:space-x-8 space-x-4'>
            <div className='flex-1 relative px-4 md:px-0 md:w-4/5'>
              <Image
                src='/images/persiapan_tatap_muka.png'
                alt='Bincang Guru Inovatif'
                layout='responsive'
                width='100%'
                height='100%'
                objectFit='contain'
              />
            </div>
            <div className='flex-1 space-y-4 font-medium flex flex-col justify-center'>
              <div className='space-y-1'>
                <p>Program Bincang GuruInovatif #3 pada:</p>
                <p className='flex items-center'>
                  <span>
                    <Image
                      src='/icons/calendar.svg'
                      alt='Calendar'
                      width='32'
                      height='32'
                    />
                  </span>
                  Senin, 3 Januari 2022
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
                  08.00 - 10.30 WIB
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
                  Youtube Ditjen PAUD Dikdasmen
                </p>
              </div>
              <div className='space-y-1'>
                <p>Bersama:</p>
                {/* <p className='flex items-center'>
                  <span>
                    <Image
                      src='/icons/calendar.svg'
                      alt='Calendar'
                      width='32'
                      height='32'
                    />
                  </span>
                </p> */}
                <p className='lg:w-1/2'>Ditjen PAUD Dikdasmen</p>
              </div>
              <p className='uppercase text-[#007BC3] font-semibold'>
                <strong>PENDAFTARAN GRATIS DAN BERSETIFIKAT!</strong>
              </p>
            </div>
          </div>
          <p className='text-lg md:px-0 px-4'>
            Pandemi mulai mereda mendorong optimisme dan semangat baru untuk
            belajar dengan kebiasaan baru. Oleh karenanya, Pemerintah
            memanfaatkan momentum ini dengan memberikan hak bagi anak-anak
            Indonesia untuk belajar tatap muka dengan tetap menjaga protokol
            kesehatan yang ketat Bagaimana penyesuaian kebijakannya? Apakah
            belajar tatap muka wajib untuk seluruh sekolah? Bagaimana peran
            pemerintah daerah? Jangan lupa join, simak, dan saksikan???? Webinar
            Penyesuaian Kebijakan Pelaksanaan Pembelajaran Tatap Muka Terbatas
            Tahun 2022
          </p>
          <button className='bg-tertiary py-2 md:mx-0 mx-4 px-6 rounded-lg font-semibold text-lg'>
            Daftar Sekarang!
          </button>
        </section>
      </main>
      <Footer />
    </>
  );
}
