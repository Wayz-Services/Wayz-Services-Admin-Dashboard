"use client";

import React from "react";
import ImageComponent from "./Reusables/Image"; // Import the component
import { MdOutlineArrowOutward } from "react-icons/md";
import { useTranslations } from 'next-intl';

const Services: React.FC = () => {
  const t = useTranslations('Services');

  return (
    <div className="flex flex-wrap justify-center gap-[30px] pl-[10px] pr-[10px] p-5 mb-12 font-sans">
      {/* Vehicles Services Card */}
      <div className="w-full sm:w-2/5 md:w-2/5 lg:w-2/5 xl:w-2/5 bg-gray-100 rounded-lg overflow-hidden relative">
        <div className="relative">
          <div style={{ position: 'relative', margin: 0, padding: 0, overflow: 'hidden', width: '100%', height: '600px' }}>
            <ImageComponent
              src="/Card.png"
              alt={t('vehiclesServicesAlt')}
              className="shadow-xl"
              style={{
                position: 'absolute',
                top: 0,
                bottom: 0,
                left: 0,
                right: 0,
                width: '100%',
                height: '100%',
                objectFit: 'cover',
              }}
              width={620}
              height={600}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[rgba(0,0,0,0)] from-60% to-[rgba(0,0,0,1)]"></div>
          </div>
          <div className="relative">
            <div className="absolute bottom-[60px] left-[20px] w-[calc(100%-40px)] text-white p-4">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                {t('vehiclesServicesTitle')}
              </h2>
              <p className="text-base sm:text-lg" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                {t('vehiclesServicesDescription')}
              </p>
            </div>
            <div className="absolute bottom-[58px] left-[22px] w-[calc(100%-40px)] h-[calc(100%-100px)] bg-black opacity-30 z-0"></div>
          </div>
        </div>
        <div className="absolute top-4 right-4 text-white">
          <MdOutlineArrowOutward size={70} />
        </div>
      </div>

      {/* Building Services Card */}
      <div className="w-full sm:w-2/5 md:w-2/5 lg:w-2/5 xl:w-2/5 bg-gray-100 rounded-lg overflow-hidden relative">
        <div className="relative">
          <div style={{ position: 'relative', margin: 0, padding: 0, overflow: 'hidden', width: '100%', height: '600px' }}>
            <ImageComponent
              src="/Card.png"
              alt={t('buildingServicesAlt')}
              className="shadow-xl"
              style={{
                position: 'absolute',
                top: 0,
                bottom: 0,
                left: 0,
                right: 0,
                width: '100%',
                height: '100%',
                objectFit: 'cover',
              }}
              width={620}
              height={600}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[rgba(0,0,0,0)] from-60% to-[rgba(0,0,0,1)]"></div>
          </div>
          <div className="relative">
            <div className="absolute bottom-[60px] left-[20px] w-[calc(100%-40px)] text-white p-4">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                {t('buildingServicesTitle')}
              </h2>
              <p className="text-base sm:text-lg" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                {t('buildingServicesDescription')}
              </p>
            </div>
            <div className="absolute bottom-[58px] left-[22px] w-[calc(100%-40px)] h-[calc(100%-100px)] bg-black opacity-30 z-0"></div>
          </div>
        </div>
        <div className="absolute top-4 right-4 text-white">
          <MdOutlineArrowOutward size={70} />
        </div>
      </div>
    </div>
  );
};

export default Services;