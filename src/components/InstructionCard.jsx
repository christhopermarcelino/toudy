import Image from 'next/image';

export default function InstructionCard({ number, src, desc }) {
  return (
    <div className='flex gap-4'>
      <span className='text-white font-semibold rounded-full bg-blue-500 w-10 h-10 flex justify-center items-center'>
        {number}
      </span>
      <div className='w-full h-fit space-y-2'>
        <Image
          src={src}
          alt='Zoom'
          layout='responsive'
          width='100%'
          height='50%'
          objectFit='contain'
          objectPosition='top'
        />
        <p className='text-center text-lg'>{desc}</p>
      </div>
    </div>
  );
}
