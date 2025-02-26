import React from "react";
import { MdOutlineArrowOutward } from "react-icons/md";
import { useTranslations } from "next-intl";
import Image from "next/image";

const Services: React.FC = () => {
  const t = useTranslations("Services");

  // Define an array of service objects
  const services = [
    {
      title: t("vehiclesServicesTitle"),
      description: t("vehiclesServicesDescription"),
      altText: t("vehiclesServicesAlt"),
      imageSrc: "/Rectangle.png",
    },
    {
      title: t("buildingServicesTitle"),
      description: t("buildingServicesDescription"),
      altText: t("buildingServicesAlt"),
      imageSrc: "/Rectangle2.png",
    },
  ];

  return (
    <div className="flex flex-col items-center bg-primary p-5">
      <div className="flex flex-col ">
        <div className="text-white text-3xl">Our Services</div>
        <div className="text-white text-4xl mt-2 mb-4 font-semibold">Check WAYZ Services</div>

        <div className="flex flex-wrap gap-[40px] mt-4">
          {services.map((service, index) => (
            <div key={index} className="rounded-xl overflow-hidden relative">
              <div className="relative overflow-hidden w-[350px] h-[350px] sm:w-[400px] sm:h-[400px] md:w-[430px] md:h-[430px] lg:w-[460px] lg:h-[460px] xl:w-[600px] xl:h-[600px]">
                <Image
                  src={service.imageSrc}
                  alt={service.altText}
                  fill
                  unoptimized
                />

                <div className="absolute inset-0 bg-gradient-to-b from-[rgba(0,0,0,0.1)] via-[rgba(0,0,0,0.5)]" />
              </div>
              <div className="relative">
                <div className="absolute bottom-[60px] left-[20px] w-[calc(100%-40px)] text-white p-4">
                  <h2 className="text-2xl sm:text-3xl font-semibold mb-4">
                    {service.title}
                  </h2>
                  <p className="text-base sm:text-lg">{service.description}</p>
                </div>

                <div className="left-[22px] w-[calc(100%-40px)] h-[calc(100%-100px)] bg-black opacity-30 z-0" />
              </div>
              <div className="absolute top-4 right-4 text-white">
                <MdOutlineArrowOutward size={90} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
