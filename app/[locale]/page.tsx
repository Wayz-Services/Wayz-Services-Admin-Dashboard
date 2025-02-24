"use client";

import { useTranslations } from "next-intl";
import Carousel from "../components/Carousel";

export default function Home() {
  const t = useTranslations("HomePage");

  return (
    <div>
      <Carousel />
    </div>
  );
}
