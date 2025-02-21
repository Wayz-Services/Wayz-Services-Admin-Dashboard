"use client";

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

  const splitDescription = (description: string): string[] => {
    return description.split(". ").map((sentence) => sentence.trim() + ".");
  };

  return (
    <div className="relative w-full h-screen overflow-hidden flex items-center justify-center">
      <div
        className="flex transition-transform ease-out duration-500"
        style={{ transform: `translateX(-${curr * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className="w-full flex-shrink-0 h-screen flex flex-col items-start justify-center relative"
            style={{ backgroundColor: slide.bgColor || "white" }}
          >
             <div className="w-3/4" style={{ transform: "translateX(120px)" }}>
    <div className="flex flex-col items-start leading-relaxed font-sans">
        {splitDescription(slide.description).map(
            (line: string, lineIndex: number) => (
                <p key={lineIndex} className="text-2xl font-semibold"> {/* Modified <p> */}
                    {line}
                </p>
            )
        )}
    </div>
              <div className="flex items-start mt-4">
                <img
                  src={slide.image}
                  alt="User"
                  className="rounded-full w-20 h-20 mr-4"
                />
                <div className="flex flex-col items-start">
                  <p className="font-bold text-base">{slide.name}</p>
                  <p className="text-black text-sm">{slide.role}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Updated Left Button Position */}
      <div className="absolute inset-y-1/2 left-[20px] flex items-center space-x-4 z-10">
        <button
          onClick={prev}
          className="p-3 rounded-full"
          style={{ backgroundColor: "#0059AB" }}
        >
          <ChevronLeft size={40} className="text-white" />
        </button>
      </div>

      {/* Updated Right Button Position */}
      <div className="absolute inset-y-1/2 right-[20px] flex items-center space-x-4 z-10">
        <button
          onClick={next}
          className="p-3 rounded-full"
          style={{ backgroundColor: "#0059AB" }}
        >
          <ChevronRight size={40} className="text-white" />
        </button>
      </div> 
    </div>
  );
}
