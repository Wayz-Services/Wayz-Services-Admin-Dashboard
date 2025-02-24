import Image from "next/image";
import React from "react";
import ThemeSwitcher from "../utils/ThemeSwitcher";
import LinkButton from "./LinkButton";
import LocalizedLink from "./LocalizedLink";

interface HeaderProps {
  isLoggedIn?: boolean;
  role?: "contractor" | "customer" | "guest";
}

const Header: React.FC<HeaderProps> = ({
  isLoggedIn = false,
  role = "guest",
}) => {
  const navItems = isLoggedIn
    ? role === "contractor"
      ? [
          { name: "My Jobs", link: "#" },
          { name: "Post a Task", link: "#" },
          { name: "Dashboard", link: "#" },
        ]
      : [
          { name: "Browse Services", link: "#" },
          { name: "My Profile", link: "#" },
          { name: "Help", link: "#" },
        ]
    : [
        { name: "Our services", link: "/" },
        { name: "I'm a supplier", link: "/login" },
        { name: "More About WAYZ", link: "/register" },
      ];

  return (
    <nav className="bg-[#0C8CE9] flex pt-10 items-start justify-around mx-auto fill-white dark:bg-black">
      {/* Logo Section */}
      <Image
        src={"/logo.png"}
        width={150}
        height={70}
        className="relative"
        alt="wayz logo"
      />

      {/* Language Selector and Theme Switcher */}
      <div className="flex items-center">
        <select className="bg-transparent pe-1 text-white outline-none">
          <option className="text-black">EN</option>
          <option className="text-black">AR</option>
        </select>

        <div className="h-8 w-[1px] mx-3 border-e py-1 border-e-white me-3 dark:border-e-white" />

        <ThemeSwitcher />
      </div>

      {/* Dynamic Navigation Links */}
      <ul className="flex items-center gap-7 font-bold text-white">
        {navItems.map((item, index) => (
          <li key={index}>
            <LocalizedLink href={item.link}>{item.name}</LocalizedLink>
          </li>
        ))}
      </ul>

      <div />
      <div />

      {/* Sign In and Post Task Buttons */}
      <div className="flex items-center text-white font-semibold gap-5">
        <LinkButton href="/about">Sign In</LinkButton>
        <LinkButton href="/" bg="white">
          Post Your Task
        </LinkButton>
      </div>
    </nav>
  );
};

export default Header;
