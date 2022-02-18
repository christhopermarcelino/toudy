import Image from 'next/image';

export default function WideCard({ name, src, desc }) {
  return (
    <div className='flex w-full bg-[#55BBF6]/40 rounded-lg shadow-lg my-6 pointer-events-auto ring-1 ring-black ring-opacity-5'>
      <div className='flex-1 w-0 p-4'>
        <div className='flex items-start'>
          <div className='relative w-10 h-10'>
            <Image src={src} alt={name} layout='fill' objectFit='cover' />
          </div>
          <div className='flex-1 w-0 ml-3'>
            <p className='font-semibold text-md'>{name}</p>
            <p className='text-sm text-dark'>{desc}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
