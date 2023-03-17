import { InputHTMLAttributes } from 'react';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  id: string;
  name: string;
  className?: string;
  error?: string;
}

const Input = ({ label, id, name, error, className, ...props }: Props) => {
  return (
    <div className="mb-4">
      <label htmlFor={id} className="block text-gray-700 font-bold mb-2">
        {label}
      </label>
      <input
        id={id}
        name={name}
        className={` ${className} shadow appearance-none border rounded w-full py-2 px-3 text-black/50 leading-tight focus:outline-none focus:shadow-outline ${
          error && 'border-red-500'
        }`}
        {...props}
      />
      {error && <p className="text-red-500 text-xs">{error}</p>}
    </div>
  );
};

export default Input;
