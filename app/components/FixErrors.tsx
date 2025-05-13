import { useTranslations } from 'next-intl';
import { IoIosWarning } from 'react-icons/io';

const FixErrors = ({ errors }: { errors: Record<string, string> }) => {
  const t = useTranslations('FixErrors');

  const hasErrors = Object.values(errors).some((value) => value !== '');

  if (!hasErrors) return null;

  return (
    <div className='bg-red-400 flex items-center w-full justify-between py-1 px-2 mb-3 rounded-md border border-red-500'>
      <div>{t('title')}</div>

      <IoIosWarning size={25} />
    </div>
  );
};

export default FixErrors;
