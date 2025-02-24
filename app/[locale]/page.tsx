"use client";

import { useTranslations } from "next-intl";
import LocalizedLink from "../components/LocalizedLink";
import Carousel from "../components/Carousel";
import Card from "../components/Card";

export default function Home() {
  const t = useTranslations("HomePage");

  return (
    <div>
      <Carousel />
    </div>
  );