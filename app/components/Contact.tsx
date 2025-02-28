"use client";

import React from "react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Button from "./Reusables/Button";

const ContactSection: React.FC = () => {
  const t = useTranslations("Contact");

  return (
    <div className="relative flex flex-col items-center bg-white p-0 my-16">
      {/* Wrapper with rounded corners on medium and larger screens */}
      <div className="relative w-screen h-[470px] sm:w-[700px] sm:h-[498px] md:w-[730px] md:h-[498px] lg:w-[970px] lg:h-[498px] xl:w-[1260px] xl:h-[498px] md:rounded-2xl lg:rounded-2xl lg:overflow-hidden">
        {/* Image container that fully covers small screens with rounded corners on medium and large screens */}
        <div className="absolute inset-0 w-full h-full md:rounded-2xl lg:rounded-2xl">
          <Image
            src="/Images/ContactImage.png"
            alt={t("contactSectionAlt")}
            fill
            className="object-cover md:rounded-2xl lg:rounded-2xl" // Rounded corners on medium and large screens
            unoptimized
          />
          <div className="absolute inset-0 bg-black opacity-40 md:rounded-2xl lg:rounded-2xl"></div>
        </div>

        {/* Centered content overlay */}
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-4">
          <div className="mb-2">
            {/* Default margin for screens below 640px, and sm for screens above */}
            <p
              className="text-lg font-semibold leading-tight uppercase tracking-wide mb-2"
              style={{ textShadow: "1px 1px 2px rgba(0, 0, 0, 1)" }}
            >
              {t("joinHappyUsers")}
            </p>
            <p
              className="text-lg font-semibold leading-tight uppercase tracking-wide mb-6 xs:mb-5"
              style={{ textShadow: "2px 2px 5px rgba(0, 0, 0, 1)" }}
            >
              {t("trustedClients")}
            </p>
          </div>
          {/* Margin for smaller screens below 640px, and larger margins for screens 640px and above */}
          <h2
            className="text-3xl font-semibold mb-7 leading-tight xs:mb-7"
            style={{ textShadow: "1px 1px 2px rgba(0, 0, 0, 1)" }}
          >
            {t("contactSectionTitle")}
          </h2>
          <Button
            backgColor="white"
            className=" font-semibold px-20 text-sm rounded-lg"
          >
            {t("contactButton")}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
