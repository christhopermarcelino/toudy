import Image from 'next/image';

export default function ServiceCard({ src, title }) {
  return (
    <div className='relative mx-4 overflow-hidden bg-white rounded-lg shadow-lg h-fit w-56 max-h-64 max-w-64'>
      <Image
        src={src}
        alt={title}
        layout='responsive'
        width='100%'
        height='80%'
        objectFit='cover'
      />
      <div className='flex items-center justify-center px-3 py-4'>
        <h3 className='text-dark'>{title}</h3>
      </div>
    </div>
  );
}
