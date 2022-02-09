export default function BottomBorderInput({ label = '', id, type = 'text' }) {
  return (
    <div className='mt-8'>
      <label
        htmlFor='account_number'
        className='block text-sm font-medium text-gray-700'
      >
        {label}
      </label>
      <div className='mt-1 relative rounded-md '>
        <input
          type={type}
          name={id}
          id={id}
          className=' block w-full pr-10 bg-transparent border-0 border-b-2 sm:text-sm focus:ring-0 border-b-gray-400 focus:border-b-gray-800'
        />
        <div className='absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none'>
          <span className='h-5 w-5 text-gray-400'>icon</span>
        </div>
      </div>
    </div>
  );
}
