'use client';

import { IoEyeOutline, IoEyeOffOutline } from 'react-icons/io5';
import Error from './Error';
import { Label } from '../ui/label';
import { Input } from '../ui/input';
import React from 'react';

interface InputProps {
  label: string;
  name: string;
  error?: string;
  isPassword?: boolean;
}

const FormInput: React.FC<React.ComponentProps<'input'> & InputProps> = ({
  label,
  id,
  isPassword,
  error,
  placeholder,
  ...props
}) => {
  const [showPassword, setShowPassword] = React.useState<boolean>(false);

  const toggleShowPassword = () => {
    setShowPassword?.(!showPassword);
  };

  return (
    <div>
      <Label htmlFor={id} className='font-medium mb-2'>
        {label}
      </Label>

      <div className='relative'>
        <Input
          id={id}
          type={isPassword && !showPassword ? 'password' : 'text'}
          className='w-full pe-10' // padding end for icon
          autoComplete={isPassword ? 'on' : 'off'}
          placeholder={placeholder}
          {...props}
        />

        {isPassword && (
          <div
            className='absolute inset-y-0 right-2 flex items-center text-gray-500 cursor-pointer'
            onClick={toggleShowPassword}
          >
            {showPassword ? (
              <IoEyeOutline className='w-5 h-5' />
            ) : (
              <IoEyeOffOutline className='w-5 h-5' />
            )}
          </div>
        )}
      </div>

      {error && <Error error={error} />}
    </div>
  );
};

export default FormInput;
