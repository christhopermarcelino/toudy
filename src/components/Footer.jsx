import Image from 'next/image';

export default function Footer() {
  return (
    <footer className='bg-[#F6F6F6]'>
      <div className='max-w-7xl mx-auto px-4 gap-8 py-16 grid grid-cols-1 md:grid-cols-2'>
        <div className='col-span-1 text-left '>
          <h2 className='lg:text-5xl text-4xl text-dark mb-4'>
            Ajar<span className='text-secondary'>in.</span>
          </h2>
          <p className='mb-8 text-lg md:text-xl md:w-1/2'>
            Platform edukasi tenaga pengajar untuk meningkatkan kualitas
            pendidikan daring di Indonesia
          </p>
          <p className='text-dark font-bold text-xl md:text-2xl'>
            &copy; 2022 Ajarin.
          </p>
        </div>
        <div className='col-span-1 md:text-right'>
          <h2 className='text-4xl md:text-5xl text-dark mb-4'>Hubungi Kami</h2>
          <p className='text-lg md:text-xl'>Telp : 024 553247</p>
          <p className='text-lg md:text-xl'>SMS Only : 045 192283</p>
          <p className='text-lg md:text-xl mb-8'>Email : support@ajarin.com</p>
          <div className='flex md:justify-end gap-4'>
            <Image
              src='/images/instagram.png'
              alt='Instagram'
              width='40'
              height='40'
            />
            <Image
              src='/images/whatsapp.png'
              alt='WhatsApp'
              width='40'
              height='40'
            />
            <Image
              src='/images/telegram.png'
              alt='Telegram'
              width='40'
              height='40'
            />
          </div>
        </div>
      </div>
    </footer>
  );
}
