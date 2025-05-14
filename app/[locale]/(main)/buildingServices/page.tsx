'use client';

import Button from '@/app/components/Reusables/Button';
import { useLocale, useTranslations } from 'next-intl';
import Image from 'next/image';
import { CiSearch } from 'react-icons/ci';
import { useState, useEffect, useMemo, useCallback } from 'react';
import ApiRequest from '@/app/utils/AxiosReq';

interface BuildingServicesData {
  Category: string;
  CategoryAr: string;
  Icone: string;
}

const Card = ({ Category, CategoryAr, Icone }: BuildingServicesData) => {
  const locale = useLocale();
  const isAR = locale === 'ar';

  return (
    <div className='shadow-lg p-4 font-medium rounded-lg w-40 capitalize flex flex-col items-center justify-center cursor-pointer'>
      <div className='relative w-[100%] h-[100px]'>
        <Image
          src={Icone}
          fill
          alt='icon'
          className='object-cover'
          sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
          unoptimized
          loading='lazy'
        />
      </div>

      <p className='text-center text-sm'>{isAR ? CategoryAr : Category}</p>
    </div>
  );
};

export default function Page() {
  const t = useTranslations('BuildingServices');

  const [data, setData] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [currentItems, setCurrentItems] = useState<any[]>([]); // Items to display
  const itemsPerPage = 10; // Number of items per load
  const [totalItems, setTotalItems] = useState(0); // Total number of items

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);

      const response = await ApiRequest<any>('/testapi/apibuilding.php', 'GET');

      if (response) {
        setData(response); // Save all the data

        setTotalItems(response.length); // Save the total number of items

        setCurrentItems(response.slice(0, itemsPerPage)); // Initially show the first `itemsPerPage` items
      }

      setIsLoading(false);
    };

    fetchData();
  }, []);

  const handleLoadMore = useCallback(() => {
    const nextItems = data.slice(0, currentItems.length + itemsPerPage);
    setCurrentItems(nextItems);
  }, [currentItems, data, itemsPerPage]);

  const memoizedItems = useMemo(() => {
    return currentItems.map((item: any, index: number) => (
      <Card key={index} {...item} />
    ));
  }, [currentItems]); // Only recalculate when currentItems change

  return (
    <div>
      <div className='bg-secondary flex flex-col items-center text-center py-12'>
        <h1 className='font-bold text-4xl'>{t('title')}</h1>

        <h6 className='text-xl mt-4'>{t('subtitle')}</h6>

        {/* Search input */}
        <div className='flex flex-col md:flex-row bg-white items-center rounded-lg p-2 gap-2 mt-5'>
          <div className='flex items-center'>
            <CiSearch className='text-primary' size={25} />

            <input
              className='border-none outline-none'
              placeholder='Search for Service'
            />
          </div>

          <Button className='w-full md:w-fit px-10'>Search</Button>
        </div>
      </div>

      <div className='py-10 flex flex-wrap justify-center gap-10'>
        {isLoading ? (
          <div>Loading...</div>
        ) : !data.length ? (
          <p className='text-red-500'>Failed to load data</p>
        ) : (
          <>{memoizedItems}</>
        )}
      </div>

      {currentItems.length < totalItems && (
        <div className='flex justify-center mt-5'>
          <div className='cursor-pointer' onClick={handleLoadMore}>
            Load More
          </div>
        </div>
      )}
    </div>
  );
}
