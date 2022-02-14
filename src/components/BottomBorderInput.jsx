import { useFormContext } from 'react-hook-form';

export default function BottomBorderInput({
  label = '',
  id,
  type = 'text',
  disabled = false,
}) {
  const { register } = useFormContext();

  return (
    <div className='mt-8'>
      <label htmlFor={id} className='block text-sm font-medium text-gray-700'>
        {label}
      </label>
      <div className='relative mt-1 rounded-md '>
        <input
          {...register(id)}
          type={type}
          id={id}
          name={id}
          disabled={disabled}
          className='block w-full pr-10 bg-transparent border-0 border-b-2 sm:text-sm focus:ring-0 border-b-gray-400 focus:border-b-gray-800'
        />
        <div className='absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none'>
          <span className='w-5 h-5 text-gray-400'>icon</span>
        </div>
      </div>
    </div>
  );
}
