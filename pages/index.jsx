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
          <h2 className='flex items-center flex-[2_2_0%] text-4xl text-dark'>
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
          <h2 className='text-5xl mb-8 text-center text-dark'>
            Materi Pembelajaran
          </h2>
          <div className='grid grid-rows-2 gap-12'>
            <div className='grid rows-span-1 grid-cols-3 gap-12'>
              <FullCard
                className='col-span-1'
                title='Kursus daring'
                src='/images/Penerapan_Blended_Learning.png'
                desc='Penerapan Blended Learning'
                date='03 - 09 Februari 2022'
              />
              <FullCard
                className='col-span-1'
                title='Webinar'
                src='/images/Bincang_Guru_Inovatif.png'
                desc='Bincang Guru Inovatif'
                date='5 Februari 2022'
              />
              <FullCard
                className='col-span-1'
                title='Video pendek'
                src='/images/Cara_Membuat_Google_Form_Kurang_Dari_Lima_Menit.png'
                desc='Cara Membuat Google Form Kurang Dari Lima Menit'
              />
            </div>
            <div className='grid rows-span-1 grid-cols-3 gap-12'>
              <FullCard
                className='cols-span-1'
                title='Kursus daring'
                src='/images/Siap_Hadapi_AKM!.png'
                desc='Siap Hadapi AKM!
'
                date='01 - 03 Februari 2022'
              />
              <FullCard
                className='cols-span-1'
                title='Webinar'
                src='/images/Persiapan_Tatap_Muka.png'
                desc='Persiapan Tatap Muka
'
                date='03 Januari 2022'
              />
              <FullCard
                className='cols-span-1'
                title='Video pendek'
                src='/images/Rumus_Rumus_Microsoft_Excel_yang_Wajib_Diketahui.png'
                desc='Rumus - Rumus Microsoft Excel yang Wajib Diketahui'
              />
            </div>
          </div>
        </section>

        <section className='min-h-main flex flex-col md:flex-row-reverse'>
          <div className='flex-1 flex justify-center items-center'>
            <h2 className='text-right text-5xl text-dark'>
              <span className='text-[#55BBF6] text-3xl'>Testimoni</span> <br />{' '}
              Lihatlah apa yang <br /> dirasakan oleh <br />
              pengguna kami
            </h2>
          </div>
          <div className='flex-1 flex justify-center items-center'>
            <div className='bg-white p-6 rounded-md shadow-lg border-b-4 border-r-4 border-gray-200'>
              <div className='px-4 py-5 sm:px-6'>
                <div className='-ml-4 -mt-4 flex justify-between items-center flex-wrap sm:flex-nowrap'>
                  <div className='mt-4'>
                    <div className='flex items-center'>
                      <div className='relative rounded-full h-12 w-12'>
                        <Image
                          src='/images/profile_pic.png'
                          alt='Profile picture'
                          layout='fill'
                          objectFit='cover'
                        />
                      </div>
                      <div className='ml-4'>
                        <p className='text-lg leading-6 font-semibold'>
                          Nur Siti Andini
                        </p>
                        <p className='text-sm text-secondary font-medium'>
                          Guru SD Negeri 299 Jakarta
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className='ml-4 mt-4 flex-shrink-0 flex'>
                    <span className='font-primary font-bold text-7xl text-secondary'>
                      &lsquo;&lsquo;
                    </span>
                  </div>
                </div>
              </div>
              <p>
                “Sebelumnya saya bingung bagaimana cara enggage dengan peserta
                didik, berkat platform ini saya merasa terbantu dan lebih
                percaya diri dalam mengajar”
              </p>
            </div>
          </div>
        </section>

        <section className='min-h-main text-center flex flex-col justify-center items-center'>
          <div>
            <div className='relative mb-8'>
              <div className='absolute inset-0 flex items-center'>
                <div className='w-full border-t translate-y-1/2 border-dark' />
              </div>
              <div className='relative flex justify-center text-sm'>
                <h2 className='px-2 bg-white text-dark text-5xl'>
                  Ajar<span className='text-secondary'>in</span>
                </h2>
              </div>
            </div>
            <p className='w-1/2 mx-auto text-2xl mb-12'>
              Kursus daring, webinar, video pendek, alat mengajar, komunitas
              ajarin, dan lain-lainya. Yuk gabung dengan komunitas ajarin!
            </p>
            <Link href='#'>
              <a className='font-bold py-3 px-6 rounded-lg text-xl bg-secondary text-white'>
                Gabung
              </a>
            </Link>
          </div>
        </section>

        <section className='min-h-main flex justify-center items-center'>
          <div className='w-full'>
            <h2 className='text-4xl text-center font-medium mb-12'>
              Ajarin Bekerjasama Dengan Beberapa Mitra
            </h2>
            <div className='relative grid grid-cols-5 gap-4'>
              <div className='col-span-1 relative w-full h-48'>
                <Image
                  src='/images/zenius.png'
                  alt='Zenius'
                  layout='fill'
                  objectFit='contain'
                />
              </div>
              <div className='col-span-1 w-full h-48 relative'>
                <Image
                  src='/images/digitalent.png'
                  alt='Digitalent'
                  layout='fill'
                  objectFit='contain'
                />
              </div>
              <div className='col-span-1 w-full h-48 relative'>
                <Image
                  src='/images/ruangguru.png'
                  alt='Ruang Guru'
                  layout='fill'
                  objectFit='contain'
                />
              </div>
              <div className='col-span-1 w-full h-48 relative'>
                <Image
                  src='/images/quipper.png'
                  alt='Quipper'
                  layout='fill'
                  objectFit='contain'
                />
              </div>
              <div className='col-span-1 w-full h-48 relative'>
                <Image
                  src='/images/kemendikbud.png'
                  alt='Kemendikbud'
                  layout='fill'
                  objectFit='contain'
                />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
