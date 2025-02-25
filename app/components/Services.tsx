"use client";

import React from "react";
import ImageComponent from "./Reusables/Image"; // Import the component
import { MdOutlineArrowOutward } from "react-icons/md";
import { useTranslations } from 'next-intl';

const Services: React.FC = () => {
  const t = useTranslations('Services');

  // Define an array of service objects
  const services = [
    {
      title: t('vehiclesServicesTitle'),
      description: t('vehiclesServicesDescription'),
      altText: t('vehiclesServicesAlt'),
      imageSrc: "/Card.png",
    },
    {
      title: t('buildingServicesTitle'),
      description: t('buildingServicesDescription'),
      altText: t('buildingServicesAlt'),
      imageSrc: "/Card.png",
    },
  ];

  return (
    <div className="flex flex-wrap justify-center gap-[30px] pl-[10px] pr-[10px] p-5 mb-12 font-sans">
      {services.map((service, index) => (
        <div key={index} className="w-full sm:w-2/5 md:w-2/5 lg:w-2/5 xl:w-2/5 bg-gray-100 rounded-lg overflow-hidden relative">
          <div className="relative">
            <div className="relative w-full h-[600px] overflow-hidden">
              <ImageComponent
                src={service.imageSrc}
                alt={service.altText}
                className="absolute top-0 bottom-0 left-0 right-0 w-full h-full object-cover shadow-xl"
                width={620}
                height={600}
              />
              <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.1)_55%,rgba(0,0,0,0.5)_75%,rgba(0,0,0,0.9)_90%,rgba(0,0,0,1)_100%)]"></div>
            </div>
            <div className="relative">
              <div className="absolute bottom-[60px] left-[20px] w-[calc(100%-40px)] text-white p-4">
                <h2 className="text-2xl sm:text-3xl font-bold mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                  {service.title}
                </h2>
                <p className="text-base sm:text-lg" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                  {service.description}
                </p>
              </div>
              <div className="absolute bottom-[58px] left-[22px] w-[calc(100%-40px)] h-[calc(100%-100px)] bg-black opacity-30 z-0"></div>
            </div>
          </div>
          <div className="absolute top-4 right-4 text-white">
            <MdOutlineArrowOutward size={70} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Services;
