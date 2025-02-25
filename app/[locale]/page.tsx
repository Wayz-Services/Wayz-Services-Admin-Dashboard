"use client";

import { useTranslations } from "next-intl";
import Carousel from "../components/Carousel";
import YourProcess from "../components/YourProcess";
import HeroSection from "../components/HeroSection";
export default function Home() {
  const t = useTranslations("HomePage");

  return (
    <div>
      <HeroSection/>
    </div>
  );
}
