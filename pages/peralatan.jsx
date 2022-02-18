import Head from 'next/head';
import Link from 'next/link';

import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import WideCard from '@/components/WideCard';

export default function Peralatan() {
  return (
    <>
      <Head></Head>
      <Navbar />
      <main className='px-2 mx-auto max-w-7xl sm:px-6 lg:px-8'>
        <section className='grid grid-cols-2 gap-8 min-h-main'>
          <div className='p-8 space-y-6'>
            <h2 className='text-3xl font-semibold'>Online Meeting</h2>
            <Link href='/alat-mengajar/zoom'>
              <a>
                <WideCard
                  name='Zoom meeting'
                  src='/images/zoom.png'
                  desc='Platform Video Conference Populer!'
                />
              </a>
            </Link>
            <Link href=''>
              <a>
                <WideCard
                  name='Kumospace'
                  src='/images/kumospace.png'
                  desc='Video Meeting Interaktif dan Seru'
                />
              </a>
            </Link>
          </div>
          <div className='p-8 space-y-6'>
            <h2 className='text-3xl font-semibold'>Alat Interaktif</h2>
            <Link href=''>
              <a>
                <WideCard
                  name='Quizziz'
                  src='/images/quizziz.png'
                  desc='Sajikan Soal Latihan Dengan Gamifikasi'
                />
              </a>
            </Link>
            <Link href=''>
              <a>
                <WideCard
                  name='Kahoot'
                  src='/images/kahoot.png'
                  desc='Selamat Tinggal Kuis Yang Membosankan'
                />
              </a>
            </Link>
          </div>
          <div className='p-8 space-y-6'>
            <h2 className='text-3xl font-semibold'>Tugas dan Ujian</h2>
            <Link href=''>
              <a>
                <WideCard
                  name='Google Classroom'
                  src='/images/google_classroom.png'
                  desc='Kebutuhan Pembelajaran di Satu Tempat'
                />
              </a>
            </Link>
            <Link href=''>
              <a>
                <WideCard
                  name='Classcard'
                  src='/images/classcard.png'
                  desc='Tempat Mengatur Kegiatan Belajar'
                />
              </a>
            </Link>
          </div>
          <div className='p-8 space-y-6'>
            <h2 className='text-3xl font-semibold'>Lainnya</h2>
            <Link href=''>
              <a>
                <WideCard
                  name='Canva'
                  src='/images/canva.png'
                  desc='Presentasi lebih menarik dengan berbagai alat dan template'
                />
              </a>
            </Link>
            <Link href=''>
              <a>
                <WideCard
                  name='PaperPass'
                  src='/images/paperpass.png'
                  desc='Cek Plagiasi Tugas Maupun Ujian '
                />
              </a>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
