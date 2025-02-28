"use client";

import Image from "next/image";
import ThemeSwitcher from "../utils/ThemeSwitcher";
import LinkButton from "./Reusables/LinkButton";
import LocalizedLink from "./Reusables/LocalizedLink";
import LocalSwitcher from "./LocalSwitcher";
import { IoIosArrowDown } from "react-icons/io";
import { useState } from "react";
import { useTranslations } from "next-intl";

interface HeaderProps {
  isLoggedIn?: boolean;
  role?: "contractor" | "customer" | "guest";
}

const Header: React.FC<HeaderProps> = ({
  isLoggedIn = false,
  role = "guest",
}) => {
  const t = useTranslations("Nav");

  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  const toggleMenu = () => {
    setMenuOpen((prev: boolean) => !prev); // Toggle the menu open/close state
  };

  const contractorNavItems = [
    { name: t("contractorNavItems.myJobs"), link: "#" },
    { name: "Post a Task", link: "#" },
    {
      name: "Dashboard",
      link: "",
      subNav: [
        { name: "Reports", link: "/dashboard/reports" },
        { name: "Settings", link: "/dashboard/settings" },
      ],
    },
  ];

  const customerNavItems = [
    { name: "Browse Services", link: "#" },
    { name: "My Profile", link: "#" },
    {
      name: "Help",
      link: "#",
      subNav: [
        { name: "FAQ", link: "/help/faq" },
        { name: "Support", link: "/help/support" },
      ],
    },
  ];

  const guestNavItems = [
    {
      name: t("guestNavItems.ourServices"),
      link: "/",
      subNav: [
        { name: t("guestNavItems.buildingServices"), link: "/" },
        { name: t("guestNavItems.browseSuppliers"), link: "/" },
        { name: t("guestNavItems.vehicleServices"), link: "/" },
      ],
    },
    {
      name: t("guestNavItems.imASupplier"),
      link: "/login",
    },
    {
      name: t("guestNavItems.moreAboutWAYZ"),
      link: "",
      subNav: [
        { name: t("guestNavItems.aboutUs"), link: "/" },
        { name: t("guestNavItems.contactUs"), link: "/" },
        { name: t("guestNavItems.howItWorks"), link: "/" },
      ],
    },
  ];

  // Determine which nav items to use
  const navItems = isLoggedIn
    ? role === "contractor"
      ? contractorNavItems
      : customerNavItems
    : guestNavItems;

  return (
    <nav className="relative bg-primary flex md:pt-10 items-center justify-between px-4 pb-10 mx-auto my-[-1px] text-white sm:text-xs md:text-xs md:items-start md:pb-0 md:px-0 md:justify-around lg:text-base dark:bg-primaryDark">
      {/* Logo Section */}
      <Image
        src="/logo.png"
        width={150}
        height={70}
        style={{ width: 95, height: 140, objectFit: "contain" }}
        alt="wayz logo"
        priority
        unoptimized
      />

      {/* Language Selector and Theme Switcher */}
      <div className="items-center hidden md:flex">
        <LocalSwitcher />
        <div className="h-8 w-[1px] mx-3 border-e py-1 border-e-white me-3 dark:border-e-white" />
        <ThemeSwitcher />
      </div>

      {/* Dynamic Navigation Links */}
      <ul className="items-center gap-7 font-bold hidden md:flex">
        {navItems.map((item, index) => (
          <li key={index} className="relative group">
            <LocalizedLink href={item.link} className="flex items-center gap-1">
              {item.name} {item.subNav && <IoIosArrowDown />}
            </LocalizedLink>

            {/* Dropdown Menu */}
            {item.subNav && (
              <div className="relative group">
                <ul className="absolute z-10 left-0 mt-2 w-48 bg-white text-gray-500 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  {/* Small triangle for dropdown */}
                  <div className="absolute bg-white rotate-[40deg] top-[-5px] right-[50%] w-6 h-6 rounded-[5px] z-0" />

                  {item.subNav.map((subItem, subIndex) => (
                    <li
                      key={subIndex}
                      className="px-4 py-2 font-normal z-10 relative"
                    >
                      <LocalizedLink href={subItem.link}>
                        {subItem.name}
                      </LocalizedLink>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </li>
        ))}
      </ul>

      <div />

      {/* Sign In and Post Task Buttons */}
      <div className="items-center text-white font-semibold gap-5 hidden md:flex">
        <LinkButton href="/about">{t("signIn")}</LinkButton>
        <LinkButton href="/" bg="white">
          {t("postTask")}
        </LinkButton>
      </div>

      <div
        className="flex flex-col justify-center items-center gap-2 w-14 h-14 cursor-pointer z-15 md:hidden"
        onClick={toggleMenu}
      >
        <span
          className={`h-1 w-full bg-white rounded-sm transition-all duration-300 ease-in-out ${
            menuOpen ? "rotate-45" : ""
          }`}
        ></span>

        <span
          className={`h-1 w-full bg-white rounded-sm transition-all duration-300 ease-in-out ${
            menuOpen ? "-rotate-45 -translate-y-3" : ""
          }`}
        ></span>
      </div>
    </nav>
  );
};

export default Header;
