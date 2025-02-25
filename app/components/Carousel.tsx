"use client";

import React, { useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { IoArrowBack, IoArrowForward } from "react-icons/io5";
import ImageComponent from "./Reusables/Image";

export default function Carousel() {
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const [loaded, setLoaded] = useState(false);
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
  });

  const slides = [
    {
      description:
        "Our Experience With WAYZ Has Been Excellent From Start To Finish. Nathan And The Team Took The Time To Understand Our Business, Our Target Market, And Digital Ambitions They Have",
      image: "/images/rob-olsson.png",
      name: "Rob Olsson",
      role: "Head Of Strategy",
    },
    {
      description:
        "Working with WAYZ was a game-changer for our company. Their expertise and dedication were evident throughout the entire project. We highly recommend them.",
      image: "/images/Slide1.png",
      name: "Jane Smith",
      role: "Marketing Director",
    },
  ];

  return (
    <div className="px-10 bg-white dark:bg-black">
      <div className="relative">
        <div ref={sliderRef} className="keen-slider">
          {slides.map((slide, index) => (
            <div
              className="keen-slider__slide flex items-center justify-center text-black text-[50px] h-[300px] max-h-screen dark:text-white"
              key={index}
            >
              <div className="w-full flex-shrink-0 min-h-[500px] flex flex-col justify-center p-4 sm:w-3/4">
                <div className="leading-relaxed font-sans text-base sm:text-xl font-semibold">
                  {slide.description}
                </div>
                <div className="flex items-start mt-4 gap-3">
                  <ImageComponent
                    src={slide.image}
                    width={60}
                    height={60}
                    alt="User"
                    className="rounded-full me-4 object-cover"
                  />

                  <div className="items-start">
                    <p className="font-bold text-sm sm:text-base">
                      {slide.name}
                    </p>
                    <p className="text-xs sm:text-sm">{slide.role}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        {loaded && instanceRef.current && (
          <>
            <Arrow
              left
              onClick={(e: any) =>
                e.stopPropagation() || instanceRef.current?.prev()
              }
              disabled={currentSlide === 0}
            />

            <Arrow
              onClick={(e: any) =>
                e.stopPropagation() || instanceRef.current?.next()
              }
              disabled={
                currentSlide ===
                instanceRef.current.track.details.slides.length - 1
              }
            />
          </>
        )}
      </div>
    </div>
  );
}

function Arrow(props: {
  disabled: boolean;
  left?: boolean;
  onClick: (e: any) => void;
}) {
  const disabled = props.disabled
    ? "opacity-50 cursor-not-allowed pointer-events-none"
    : "cursor-pointer";

  const left = props.left ? "left-[5px]" : "left-auto right-[5px]";

  return (
    <div
      className={`p-2 absolute top-1/2 -translate-y-1/2 bg-primary rounded-full ${disabled} ${left}`}
      onClick={(e) => {
        if (!props.disabled) {
          props.onClick(e);
        }
      }}
    >
      {props.left ? (
        <IoArrowBack size={40} color="white" />
      ) : (
        <IoArrowForward color="white" size={40} />
      )}
    </div>
  );
}
