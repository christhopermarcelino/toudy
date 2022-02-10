import { classNames } from '@/lib/helpers';

export default function SideInput({
  label,
  id,
  type = 'text',
  value = '',
  disabled = false,
  className = '',
}) {
  return (
    <div className='flex items-center my-6'>
      <label
        htmlFor={id}
        className='block w-1/3 text-2xl font-medium text-gray-700'
      >
        {label}
      </label>
      <div className='w-full ml-1'>
        <input
          type={type}
          name={id}
          id={id}
          disabled={disabled}
          value={value}
          className={classNames(
            `block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm ${className}`
          )}
          placeholder='you@example.com'
        />
      </div>
    </div>
  );
}
