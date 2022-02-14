import { classNames } from '@/lib/helpers';
//'/images/Penerapan_Blended_Learning.png'
export default function FullCard({ title, src, desc, date, className }) {
  return (
    <div>
      <div
        style={{
          backgroundImage: `url(${src})`,
        }}
        className={classNames(
          `before:block before:absolute bg-cover bg-no-repeat before:-inset-0 mb-3 relative before:bg-gradient-to-t before:from-[#454343] before:to-transparent rounded-lg overflow-hidden shadow-md flex h-96 justify-center items-end ${className}`
        )}
      >
        <p className='mb-4 font-bold text-white relative'>{title}</p>
      </div>
      <p className='font-semibold text-center'>{desc}</p>
      <p className='text-center'>{date}</p>
    </div>
  );
}
