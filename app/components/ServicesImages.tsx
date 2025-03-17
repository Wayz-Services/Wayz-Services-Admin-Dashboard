import { useTranslations } from "next-intl";
import Image from "next/image";
import { MdOutlineArrowOutward } from "react-icons/md";

const ServicesImages = () => {
  const t = useTranslations("Services");

  // Define an array of service objects
  const services = [
    {
      title: t("vehiclesServicesTitle"),
      description: t("vehiclesServicesDescription"),
      altText: t("vehiclesServicesAlt"),
      imageSrc: "/Images/InitialScreen/Vehicles.png",
    },
    {
      title: t("buildingServicesTitle"),
      description: t("buildingServicesDescription"),
      altText: t("buildingServicesAlt"),
      imageSrc: "/Images/InitialScreen/Buildings.png",
    },
  ];
  return (
    <div className="flex items-center justify-center flex-wrap gap-[40px] mt-4">
      {services.map((service, index) => (
        <div key={index} className="rounded-xl overflow-hidden relative">
          <div className="relative overflow-hidden w-[400px] h-[400px] md:w-[430px] md:h-[430px] lg:w-[460px] lg:h-[460px] xl:w-[550px] xl:h-[550px] 2xl:w-[600px] 2xl:h-[600px]">
            <Image
              src={service.imageSrc}
              alt={service.altText}
              fill
              unoptimized
            />
          </div>
          <div className="relative">
            <div className="absolute bottom-[60px] left-[20px] w-[calc(100%-40px)] text-white p-4">
              <h2 className="text-2xl sm:text-3xl font-semibold mb-4">
                {service.title}
              </h2>
              <p className="text-base sm:text-lg">{service.description}</p>
            </div>
          </div>
          <div className="absolute top-4 ltr:right-4 rtl:left-4 rtl:rotate-[-90deg] text-white">
            <MdOutlineArrowOutward size={90} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ServicesImages;
