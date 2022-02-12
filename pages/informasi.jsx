import Head from 'next/head';

import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import SquareCard from '@/components/SquareCard';

export default function Informasi() {
  return (
    <>
      <Head></Head>
      <Navbar />
      <main className='px-2 mx-auto max-w-7xl sm:px-6 lg:px-8'>
        <section className='py-8 space-y-12 md:py-12 lg:py-16 min-h-main'>
          <div>
            <h2 className='mb-4'>Pelatihan</h2>
            <div className='flex gap-8'>
              <SquareCard
                src='/images/guru_inovatif.png'
                title='Guru Inovatif'
                date='22 Februari 2022'
              />
              <SquareCard
                src='/images/guru_kreatif.png'
                title='Guru Kreatif'
                date='23 Februari 2022'
              />
              <SquareCard
                src='/images/guru_digital.png'
                title='Guru Digital'
                date='24 Februari 2022'
              />
            </div>
          </div>
          <div>
            <h2 className='mb-4'>Webinar</h2>
            <div className='flex gap-8'>
              <SquareCard
                src='/images/bincang_guru_inovatif.png'
                title='Bincang Guru Inovatif'
                date='5 Februari 2022'
              />
              <SquareCard
                src='/images/webinar_dan_workshop_series1_sabbara.png'
                title='Webinar dan Workshop Series 1 SABBARA'
                date='28 Januari 2022'
              />
              <SquareCard
                src='/images/persiapan_tatap_muka.png'
                title='Persiapan Tatap Muka'
                date='3 Januari 2022'
              />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
