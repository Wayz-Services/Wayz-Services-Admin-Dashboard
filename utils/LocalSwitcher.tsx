import { useLocale } from 'next-intl';
import { useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';

const LocalSwitcher = () => {
  const [isPending, setIsPending] = useState<boolean>(false);
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const handleLocalChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newLocale = event.target.value;

    const pathSegments = pathname.split('/').slice(2).join('/'); // Remove current locale

    setIsPending(true);

    router.replace(`/${newLocale}/${pathSegments}`);

    setIsPending(false);
  };

  return (
    <select
      value={locale}
      onChange={handleLocalChange}
      className='bg-transparent pe-1 text-white outline-none'
      disabled={isPending}
    >
      <option className='text-black' value={'en'}>
        EN
      </option>

      <option className='text-black' value={'ar'}>
        AR
      </option>
    </select>
  );
};

export default LocalSwitcher;
