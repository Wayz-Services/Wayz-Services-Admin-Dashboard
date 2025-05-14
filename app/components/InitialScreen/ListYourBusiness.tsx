import Image from 'next/image';
import Button from '../Reusables/Button';
import { useTranslations } from 'next-intl';

const ListYourBusiness = () => {
  const t = useTranslations('ListYourBusiness');

  return (
    <div
      className="relative md:top-[-100px] w-[100%] mb-5 md:mb-0 sm:w-[80%] md:[70%] lg:w-[80%] xl:w-[60%] flex flex-col md:flex-row p-6 gap-5 md:gap-12 min-h-[300px] items-center justify-cente bg-white dark:bg-primary rounded-lg"
      style={{ boxShadow: "0px 7px 5px 1px rgba(184, 184, 184, 0.25)" }}
    >
      <div className='relative w-[100%] h-[250px] sm:h-[250px] lg:h-[300px] xl:h-[250px] 2xl:h-[350px]'>
        <Image
          src='/Images/InitialScreen/Card.png'
          fill
          unoptimized
          className='rounded-[20px] object-cover'
          alt='image'
          priority
          sizes='(max-width: 640px) 100vw, (max-width: 1024px) 80vw, (max-width: 1440px) 60vw, (max-width: 1920px) 50vw, 40vw'
        />
      </div>

      <div className="text-yellow-600 dark:text-red-500">
        <p className="font-semibold text-3xl">{t("areYou")}</p>

        <p className='text-primary py-3 text-2xl'>{t('getJob')}</p>

        <Button className='px-6 w-[100%] sm:w-auto'>{t('list')}</Button>
      </div>
    </div>
  );
};

export default ListYourBusiness;
