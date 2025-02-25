"use client";

import React from "react";
import ImageComponent from "./Reusables/Image";
import { MdOutlineArrowOutward } from "react-icons/md";

const Services: React.FC = () => {
  return (
    <div className="flex flex-wrap justify-center gap-[30px] pl-[10px] pr-[10px] p-5 mb-12 font-sans">
      {/* Vehicles Services Card */}
      <div className="w-full sm:w-2/5 md:w-2/5 lg:w-2/5 xl:w-2/5 bg-gray-100 rounded-lg overflow-hidden relative">
        <div className="relative">
          <div style={{ position: 'relative' }}>
            <ImageComponent
              src="/Card.png"
              width={620}
              height={600}
              alt="Vehicles Services"
              className="shadow-xl"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent from-60% to-black/70 to-70% to-black/40 to-85% to-black/10"></div> {/* Updated gradient */}
          </div>
          <div className="relative">
            <div className="absolute bottom-[60px] left-[20px] w-[calc(100%-40px)] text-white p-4">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                Vehicles Services
              </h2>
              <p className="text-base sm:text-lg" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                We help you avoid small mistakes that turn into big compliance issues
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
          <div style={{ position: 'relative' }}>
            <ImageComponent
              src="/Card.png"
              width={620}
              height={600}
              alt="Building Services"
              className="shadow-xl"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent from-60% to-black/70 to-70% to-black/40 to-85% to-black/10"></div>
          </div>
          <div className="relative">
            <div className="absolute bottom-[60px] left-[20px] w-[calc(100%-40px)] text-white p-4">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                Building Services
              </h2>
              <p className="text-base sm:text-lg" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                We help you avoid small mistakes that turn into big compliance issues
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