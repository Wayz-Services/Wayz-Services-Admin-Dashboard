"use client";

import Image from "next/image";
import ThemeSwitcher from "../utils/ThemeSwitcher";
import LinkButton from "../components/LinkButton";

export default function Home() {
  return (
    <nav className="bg-[#0C8CE9] flex pt-10 items-start justify-around mx-auto fill-white dark:bg-black">
      <Image
        src={"/logo.png"}
        width={150}
        height={70}
        className="relative"
        alt="wayz logo"
      />

      <div className="flex items-center">
        <select className="bg-transparent pe-1 text-white outline-none">
          <option className="text-black">EN</option>
          <option className="text-black">AR</option>
        </select>

        <div className="h-8 w-[1px] mx-3 border-e py-1 border-e-white me-3 dark:border-e-white" />

        <ThemeSwitcher />
      </div>

      <ul className="flex items-center gap-7 font-bold text-white">
        <li>Our services</li>
        <li>I'm a Supplier</li>
        <li>More About Wayz</li>
      </ul>

      <div />
      <div />

      <div className="flex items-center text-white font-semibold gap-5">
        <LinkButton href="/about">Sign In</LinkButton>
        <LinkButton href="/" bg="white">
          Post Your Task
        </LinkButton>
      </div>
    </nav>
  );
}
