'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import FormInput from '@/components/shared/Input';
import { authStore } from '@/mobx/AuthStore';
import Error from '@/components/shared/Error';
import { observer } from 'mobx-react-lite';

interface SignInData {
  email: string;
  password: string;
}

export const SignIn = observer(() => {
  const { SignIn, errorMessage, setErrorMessage } = authStore;

  const [form, setForm] = useState<SignInData>({ email: '', password: '' });

  const [errors, setErrors] = useState<SignInData>({ email: '', password: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });

    setErrorMessage(''); // Clear error message on input change

    setErrors({ ...errors, [e.target.name]: '' }); // Clear specific field error
  };

  const validateForm = () => {
    let valid = true;
    const newErrors: SignInData = { email: '', password: '' };

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^(?=.*\d)(?=.*[A-Z])(?!.*\s).{8,}$/;

    if (!form.email) {
      newErrors.email = 'Enter your email';
      valid = false;
    } else if (form.email.includes('@') && !emailRegex.test(form.email)) {
      newErrors.email = 'Please enter a valid email';
      valid = false;
    }

    if (!form.password) {
      newErrors.password = 'Please enter your password';
      valid = false;
    } else if (!passwordRegex.test(form.password)) {
      newErrors.password =
        'Password must contain at least 8 characters, one capital letter, and one number.';
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Handle form submission logic here
    SignIn(form);
  };

  return (
    <div className='flex flex-col items-center justify-center h-[100vh]'>
      <Card className='w-[20vw]'>
        <CardHeader className='text-center'>
          <CardTitle>Welcome Back!</CardTitle>
        </CardHeader>

        <CardContent>
          <form>
            <div className='grid w-full items-center gap-4'>
              <FormInput
                placeholder='Enter your email'
                id='email'
                label='Email'
                name='email'
                value={form.email}
                onChange={handleChange}
                error={errors.email}
              />

              <FormInput
                placeholder='Enter your password'
                id='password'
                label='Password'
                name='password'
                isPassword
                value={form.password}
                onChange={handleChange}
                error={errors.password}
              />
            </div>
          </form>

          {errorMessage && <Error error={errorMessage} />}
        </CardContent>

        <CardFooter className='flex'>
          <Button
            variant='outline'
            onClick={handleSubmit}
            className='w-full hover:cursor-pointer'
          >
            Login
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
});
