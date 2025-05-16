'use client';
import { Button } from '@/components/ui/button';
import { useRouter } from '@/i18n/routing';
import { authStore } from '@/mobx/AuthStore';
import React from 'react';

const page = () => {
  const { SignOut } = authStore;

  const router = useRouter();

  const handleSingOut = async () => {
    const result = await SignOut();

    if (result) {
      // Redirect to login page or perform any other action
      router.replace('/sign-in');
    }
  };

  return (
    <div>
      <Button className='cursor-pointer' onClick={handleSingOut}>
        Log Out
      </Button>
    </div>
  );
};

export default page;
