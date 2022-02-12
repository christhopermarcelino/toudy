export default function SquareCard({ src, title, date }) {
  return (
    <div
      style={{ backgroundImage: `url(${src})` }}
      className='before:block before:absolute before:inset-0 overflow-hidden relative before:bg-gradient-to-t before:from-[#454343] before:to-transparent flex flex-col justify-end flex-1 p-8 bg-no-repeat rounded-lg shadow-lg h-80'
    >
      <span className='z-10 text-3xl font-medium text-white'>{title}</span>
      <span className='z-10 text-xl text-white'>{date}</span>
    </div>
  );
}
