import Head from 'next/head';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function TentangKami() {
  return (
    <>
      <Head />
      <Navbar />
      <main className='px-2 mx-auto max-w-7xl sm:px-6 lg:px-8'>
        <section className='flex flex-col items-start justify-center space-y-8 min-h-main'>
          <h1 className='mb-8 text-7xl lg:text-9xl text-dark'>Ajarin.</h1>
          <p className='text-2xl md:w-2/3'>
            Sebuah platform yang mengedukasi tenaga pengajar untuk meningkatkan
            kualitas pendidikan daring di Indonesia.
          </p>
          <p className='text-xl lg:text-2xl lg:w-2/3'>
            Merasa terbantu oleh platform ini? yuk beritahu guru yang lain agar
            bisa tumbuh di <span className='font-bold'>Ajarin</span>
          </p>
          <button className='px-8 py-2 font-bold rounded-lg text-md lg:text-lg bg-tertiary'>
            Bagikan Sekarang
          </button>
        </section>
      </main>
      <Footer />
    </>
  );
}
