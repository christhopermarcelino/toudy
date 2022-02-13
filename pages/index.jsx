import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

import SelectInput from '@/components/SelectInput';
import Navbar from '@/components/Navbar';
import ServiceCard from '@/components/ServiceCard';
import FullCard from '@/components/FullCard';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Head>
        <title>Ajarin</title>
        <meta name='description' content='' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Navbar />

      <main className='px-2 mx-auto max-w-7xl sm:px-6 lg:px-8'>
        <section className='flex min-h-main'>
          <div className='flex flex-col justify-center flex-1'>
            <h2 className='mb-8 text-7xl text-dark'>
              Mulailah belajar <br />
              dengan kami
            </h2>
            <p className='mb-4 text-xl'>
              Halo! <br />
              Apa yang anda butuhkan hari ini?
            </p>
            <SelectInput />
          </div>
          <div className='relative flex items-center justify-center flex-1'>
            <Image
              src='/images/home_image.png'
              alt='Ajarin'
              layout='fill'
              objectFit='contain'
            />
          </div>
        </section>

        <section className='flex min-h-main'>
          <h2 className='flex items-center flex-[2_2_0%] text-5xl text-dark'>
            Layanan ini tersedia untuk anda
          </h2>
          <div className='flex-[3_3_0%] flex  flex-col space-y-16 justify-center items-center'>
            <div className='flex items-end justify-center '>
              <ServiceCard
                src='/images/kursus_daring.png'
                title='Kursus Daring'
              />
              <ServiceCard src='/images/webinar.png' title='Webinar' />
              <ServiceCard
                src='/images/video_pendek.png'
                title='Video Pendek'
              />
            </div>
            <div className='flex justify-center '>
              <ServiceCard
                src='/images/alat_mengajar.png'
                title='Alat mengajar'
              />
              <ServiceCard
                src='/images/komunitas.png'
                title='Komunitas Ajarin'
              />
            </div>
          </div>
        </section>

        <section className='min-h-main'>
          <h2 className='mb-8 text-5xl text-center text-dark'>
            Materi Pembelajaran
          </h2>
          <div className='grid grid-rows-2 gap-12'>
            <div className='grid grid-cols-3 gap-12 rows-span-1'>
              <FullCard
                className='col-span-1'
                title='Kursus daring'
                src='/images/penerapan_blended_learning.png'
                desc='Penerapan Blended Learning'
                date='03 - 09 Februari 2022'
              />
              <FullCard
                className='col-span-1'
                title='Webinar'
                src='/images/bincang_guru_inovatif.png'
                desc='Bincang Guru Inovatif'
                date='5 Februari 2022'
              />
              <FullCard
                className='col-span-1'
                title='Video pendek'
                src='/images/cara_membuat_google_form_kurang_dari_lima_menit.png'
                desc='Cara Membuat Google Form Kurang Dari Lima Menit'
              />
            </div>
            <div className='grid grid-cols-3 gap-12 rows-span-1'>
              <FullCard
                className='cols-span-1'
                title='Kursus daring'
                src='/images/siap_hadapi_akm!.png'
                desc='Siap Hadapi AKM!
'
                date='01 - 03 Februari 2022'
              />
              <FullCard
                className='cols-span-1'
                title='Webinar'
                src='/images/persiapan_tatap_muka.png'
                desc='Persiapan Tatap Muka
'
                date='03 Januari 2022'
              />
              <FullCard
                className='cols-span-1'
                title='Video pendek'
                src='/images/rumus_rumus_microsoft_excel_yang_wajib_diketahui.png'
                desc='Rumus - Rumus Microsoft Excel yang Wajib Diketahui'
              />
            </div>
          </div>
        </section>

        <section className='flex flex-col min-h-main md:flex-row-reverse'>
          <div className='flex items-center justify-center flex-1'>
            <h2 className='text-5xl text-right text-dark'>
              <span className='text-[#55BBF6] text-3xl'>Testimoni</span> <br />{' '}
              Lihatlah apa yang <br /> dirasakan oleh <br />
              pengguna kami
            </h2>
          </div>
          <div className='flex items-center justify-center flex-1'>
            <div className='p-6 bg-white border-b-4 border-r-4 border-gray-200 rounded-md shadow-lg'>
              <div className='px-4 py-5 sm:px-6'>
                <div className='flex flex-wrap items-center justify-between -mt-4 -ml-4 sm:flex-nowrap'>
                  <div className='mt-4'>
                    <div className='flex items-center'>
                      <div className='relative w-12 h-12 rounded-full'>
                        <Image
                          src='/images/profile_pic.png'
                          alt='Profile picture'
                          layout='fill'
                          objectFit='cover'
                        />
                      </div>
                      <div className='ml-4'>
                        <p className='text-lg font-semibold leading-6'>
                          Rudi Setiawan
                        </p>
                        <p className='text-sm font-medium text-secondary'>
                          Guru SD Negeri 299 Jakarta
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className='flex flex-shrink-0 mt-4 ml-4'>
                    <span className='font-bold font-primary text-7xl text-secondary'>
                      &lsquo;&lsquo;
                    </span>
                  </div>
                </div>
              </div>
              <p>
                “Sebelumnya saya bingung bagaimana cara engage dengan peserta
                didik, berkat platform ini saya merasa terbantu dan lebih
                percaya diri dalam mengajar”
              </p>
            </div>
          </div>
        </section>

        <section className='flex flex-col items-center justify-center text-center min-h-main'>
          <div>
            <div className='relative mb-8'>
              <div className='absolute inset-0 flex items-center'>
                <div className='w-full translate-y-1/2 border-t border-dark' />
              </div>
              <div className='relative flex justify-center text-sm'>
                <h2 className='px-2 text-5xl bg-white text-dark'>
                  Ajar<span className='text-secondary'>in</span>
                </h2>
              </div>
            </div>
            <p className='w-1/2 mx-auto mb-12 text-2xl'>
              Kursus daring, webinar, video pendek, alat mengajar, komunitas
              ajarin, dan lain-lainya. Yuk gabung dengan komunitas ajarin!
            </p>
            <Link href='#'>
              <a className='px-6 py-3 text-xl font-bold text-white rounded-lg bg-secondary'>
                Gabung
              </a>
            </Link>
          </div>
        </section>

        <section className='flex items-center justify-center min-h-main'>
          <div className='w-full'>
            <h2 className='mb-12 text-4xl font-medium text-center'>
              Ajarin Bekerjasama Dengan Beberapa Mitra
            </h2>
            <div className='relative grid grid-cols-5 gap-4'>
              <div className='relative w-full h-48 col-span-1 bg-gray-300 animate-pulse'>
                {/* <Image
                  src='/images/zenius.png'
                  alt='Zenius'
                  layout='fill'
                  objectFit='contain'
                /> */}
              </div>
              <div className='relative w-full h-48 col-span-1 bg-gray-300 animate-pulse'>
                {/* <Image
                  src='/images/digitalent.png'
                  alt='Digitalent'
                  layout='fill'
                  objectFit='contain'
                /> */}
              </div>
              <div className='relative w-full h-48 col-span-1 bg-gray-300 animate-pulse'>
                {/* <Image
                  src='/images/ruangguru.png'
                  alt='Ruang Guru'
                  layout='fill'
                  objectFit='contain'
                /> */}
              </div>
              <div className='relative w-full h-48 col-span-1 bg-gray-300 animate-pulse'>
                {/* <Image
                  src='/images/quipper.png'
                  alt='Quipper'
                  layout='fill'
                  objectFit='contain'
                /> */}
              </div>
              <div className='relative w-full h-48 col-span-1 bg-gray-300 animate-pulse'>
                {/* <Image
                  src='/images/kemendikbud.png'
                  alt='Kemendikbud'
                  layout='fill'
                  objectFit='contain'
                /> */}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
