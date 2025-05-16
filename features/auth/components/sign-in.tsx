'use client';

import { useState } from 'react';
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
import { useTranslations } from 'next-intl';
import CustomButton from '@/components/shared/Button';
import { useRouter } from '@/i18n/routing';

interface SignInData {
  account: string;
  password: string;
}

export const SignIn = observer(() => {
  const { SignIn, errorMessage, setErrorMessage, isLoading, setIsLoading } =
    authStore;

  const [form, setForm] = useState<SignInData>({ account: '', password: '' });

  const [errors, setErrors] = useState<SignInData>({
    account: '',
    password: '',
  });

  const t = useTranslations('sign_in');

  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });

    setErrorMessage(''); // Clear error message on input change

    setErrors({ ...errors, [e.target.name]: '' }); // Clear specific field error
  };

  const validateForm = () => {
    let valid = true;
    const newErrors: SignInData = { account: '', password: '' };

    const accountRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^(?=.*\d)(?=.*[A-Z])(?!.*\s).{8,}$/;

    if (!form.account) {
      newErrors.account = t('required');
      valid = false;
    } else if (form.account.includes('@') && !accountRegex.test(form.account)) {
      newErrors.account = t('valid_email');
      valid = false;
    } else if (!form.account.includes('@')) {
      // Username must be 3-20 characters, alphanumeric, underscores allowed, no spaces
      const usernameRegex = /^[a-zA-Z0-9_]{3,20}$/;
      if (!usernameRegex.test(form.account)) {
        valid = false;
      }

      newErrors.account = t('valid_username');
    }

    if (!form.password) {
      newErrors.password = t('required');
      valid = false;
    } else if (!passwordRegex.test(form.password)) {
      newErrors.password = t('valid_password');
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Handle form submission logic here
    // if (validateForm()) {
    const resp: boolean = await SignIn(form);

    if (resp) {
      // Redirect to dashboard or perform any other action
      router.push(`/dashboard`);

      setIsLoading(false);

      return;
    }

    setIsLoading(false);
    // }
  };

  const formData = [
    {
      placeholder: t('account_placeholder'),
      id: 'account',
      label: t('account'),
      name: 'account',
      isPassword: false,
      value: form.account,
      error: errors.account,
    },
    {
      placeholder: t('password_placeholder'),
      id: 'password',
      label: t('password'),
      name: 'password',
      isPassword: true,
      value: form.password,
      error: errors.password,
    },
  ];

  return (
    <div className='flex flex-col items-center justify-center h-[100vh]'>
      <Card className='w-[20vw]'>
        <CardHeader className='text-center'>
          <CardTitle>{t('title')}</CardTitle>
        </CardHeader>

        <CardContent>
          <form>
            <div className='grid w-full items-center gap-4'>
              {formData.map((input, idx) => (
                <FormInput
                  key={idx}
                  placeholder={input.placeholder}
                  id={input.id}
                  label={input.label}
                  name={input.name}
                  isPassword={input.isPassword}
                  value={input.value}
                  onChange={handleChange}
                  error={input.error}
                />
              ))}
            </div>
          </form>

          {errorMessage && <Error error={errorMessage} />}
        </CardContent>

        <CardFooter className='flex'>
          <CustomButton
            onClick={handleSubmit}
            isLoading={isLoading}
            className='w-full hover:cursor-pointer'
          >
            {t('sign_in_button')}
          </CustomButton>
        </CardFooter>
      </Card>
    </div>
  );
});
