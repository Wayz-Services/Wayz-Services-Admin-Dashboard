import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "react-feather";

interface Slide {
  description: string;
  bgColor?: string;
  image?: string;
  name?: string;
  role?: string;
}

interface CarouselProps {
  children: Slide[];
  autoSlide?: boolean;
  autoSlideInterval?: number;
}

export default function Carousel({
  children: slides,
  autoSlide = false,
  autoSlideInterval = 3000,
}: CarouselProps) {
  const [curr, setCurr] = useState(0);

  const prev = () =>
    setCurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1));

  const next = () =>
    setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1));

  useEffect(() => {
    if (!autoSlide) return;
    const slideInterval = setInterval(next, autoSlideInterval);
    return () => clearInterval(slideInterval);
  }, [autoSlide, autoSlideInterval]);

  const splitDescription = (description: string): string[] =>
    description.split(". ").map((sentence) => sentence.trim() + ".");

  return (
    <div className="relative w-full h-auto min-h-[500px] overflow-hidden flex items-center justify-center">
      {/* Carousel content */}
      <div className="w-[91%] px-6 sm:px-8 flex items-center justify-center overflow-hidden"> {/* Reduced width */}
        <div
          className="flex w-full transition-transform ease-out duration-500"
          style={{ transform: `translateX(-${curr * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <div
              key={index}
              className="w-full flex-shrink-0 h-auto min-h-[500px] flex flex-col items-start justify-center p-4 sm:p-10"
              style={{ backgroundColor: slide.bgColor || "white" }}
            >
              <div className="w-full sm:w-3/4 pl-6 sm:pl-24">
                <div className="flex flex-col items-start leading-relaxed font-sans">
                  {splitDescription(slide.description).map(
                    (line: string, lineIndex: number) => (
                      <p key={lineIndex} className="text-base sm:text-xl font-semibold">
                        {line}
                      </p>
                    )
                  )}
                </div>
                <div className="flex items-start mt-4">
                  <img
                    src={slide.image}
                    alt="User"
                    className="rounded-full w-16 h-16 sm:w-20 sm:h-20 mr-4"
                  />
                  <div className="flex flex-col items-start">
                    <p className="font-bold text-sm sm:text-base">{slide.name}</p>
                    <p className="text-black text-xs sm:text-sm">{slide.role}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Left Navigation Button */}
      <div className="absolute top-1/2 left-1 sm:left-4 md:left-8 flex items-center z-10 transform -translate-y-12">
        <button
          onClick={prev}
          className="p-4 rounded-full bg-[#0059AB] flex items-center justify-center"
        >
          <ChevronLeft size={24} className="text-white" />
        </button>
      </div>

      {/* Right Navigation Button */}
      <div className="absolute top-1/2 right-8 sm:right-10 md:right-16 transform translate-x-8 transform -translate-y-12  flex items-center z-10">
        <button
          onClick={next}
          className="p-4 rounded-full bg-[#0059AB] flex items-center justify-center"
        >
          <ChevronRight size={24} className="text-white" />
        </button>
      </div>
    </div>
  );
}