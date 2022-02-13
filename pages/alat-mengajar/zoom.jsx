import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import InstructionCard from '@/components/InstructionCard';

const noAccountInstructions = [
  {
    desc: 'Buka website zoom.us, lalu tekan Sign Up yang berada di kanan atas',
  },
  {
    desc: 'Pilih tanggal yang sesuai dengan tanggal lahir anda, lalu tekan continue',
  },
  {
    desc: 'Masukkan alamat email anda yang aktif',
  },
  {
    desc: 'Cek kontak masuk pada email yang telah anda masukkan sebelumnya',
  },
  {
    desc: 'Anda akan mendapatkan pesan dari zoom untuk mengaktivasi akun anda, klik pada activate account',
  },
  {
    desc: 'Anda akan diarahkan kembali ke website zoom dan isikan nama anda dan buat password',
  },
  {
    desc: 'Pada langkah ini optional, Jika anda tidak membutuhkan maka anda bisa menekan tombol skip. Jika anda ingin mengundang rekan anda, maka masukkan email rekan anda, selesaikan captcha dan tekan invite.',
  },
  {
    desc: 'Anda bisa membuat meeting pertama anda dengan menekan Start Meeting Now',
  },
];

const withAccountInstructions = [
  {
    desc: 'Kunjungi website zoom.us, tekan sign in yag tertera di kanan atas',
  },
  {
    desc: 'Masukkan email yang teah terdaftar dan masukkan password anda kemudian tekan sign in',
  },
  {
    desc: 'Tekan host meeting yang terletak di kanan atas',
  },
  {
    desc: 'Silahkan pilih salah satu dari tiga',
  },
  {
    desc: 'Untuk memudahkan anda disarankan untuk menekan centang pada kolom “Alaways allow zoom.us to open link..”',
  },
  {
    desc: 'Lalau tekan open zoom meeting dan meeting anda akan tersedia',
  },
];

export default function Zoom() {
  return (
    <>
      <Head></Head>
      <Navbar />
      <main className='px-2 mx-auto py-12 max-w-7xl sm:px-6 lg:px-8'>
        <section className='min-h-main space-y-20'>
          <div className='space-y-4'>
            <div className='flex items-center space-x-8'>
              <Image src='/icons/zoom.svg' alt='Zoom' width='56' height='56' />
              <h1>Zoom Meeting</h1>
            </div>
            <p className='text-xl'>
              Zoom Meeting adalah sebuah platform video conference yang cukup
              populer. Memiliki tampilan yang cukup sederhana serta penggunaan
              yang tidak terlalu rumit jika memahami caranya dengan benar.
              Berikut adalah langkah-langkah dalam menggunakan Zoom Meeting.
            </p>
          </div>
          <div>
            <h2 className='mb-8 text-2xl'>
              Cara Membuat Meeting <br />
              Jika Anda Belum Memiliki Akun Zoom
            </h2>
            <div className='grid grid-cols-2 gap-8'>
              {noAccountInstructions.map((e, i) => (
                <InstructionCard
                  key={i}
                  number={i + 1}
                  src={`/images/alat_mengajar/zoom/no_account/${i + 1}.png`}
                  desc={e.desc}
                />
              ))}
            </div>
          </div>
          <div>
            <h2 className='text-2xl mb-8'>
              Cara Membuat Meeting <br />
              Jika Anda Telah Memiliki Akun Zoom
            </h2>
            <div className='grid mb-16 grid-cols-2 gap-8'>
              {withAccountInstructions.map((e, i) => (
                <InstructionCard
                  key={i}
                  number={i + 1}
                  src={`/images/alat_mengajar/zoom/with_account/${i + 1}.png`}
                  desc={e.desc}
                />
              ))}
            </div>
            <Link href='#'>
              <a className='py-2 px-6 bg-tertiary font-semibold hover:bg-blue-300 focus:ring focus:ring-blue-400/80 text-xl rounded-lg'>
                Buat meetingmu di sini
              </a>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
