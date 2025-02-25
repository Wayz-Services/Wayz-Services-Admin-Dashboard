"use client";

import { useTranslations } from "next-intl";
import Carousel from "../components/Carousel";
import YourProcess from "../components/YourProcess";
import Services from "../components/Services"; // Import the Services component

export default function Home() {
  const t = useTranslations("HomePage");

  return (
    <div>
      <YourProcess />
      <Services /> {/* Add the Services component here */}
      <Carousel />
    </div>
  );
}