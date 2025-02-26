import Image from "next/image";
import ThemeSwitcher from "../utils/ThemeSwitcher";
import LinkButton from "./Reusables/LinkButton";
import LocalizedLink from "./Reusables/LocalizedLink";
import LocalSwitcher from "./LocalSwitcher";
import { IoIosArrowDown } from "react-icons/io";

interface HeaderProps {
  isLoggedIn?: boolean;
  role?: "contractor" | "customer" | "guest";
}

const Header: React.FC<HeaderProps> = ({
  isLoggedIn = false,
  role = "guest",
}) => {
  const contractorNavItems = [
    { name: "My Jobs", link: "#" },
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
      name: "Our services",
      link: "/",
      subNav: [
        { name: "Building Services", link: "/" },
        { name: "Browse Suppliers", link: "/" },
        { name: "Vehicle Services", link: "/" },
      ],
    },
    {
      name: "I'm a supplier",
      link: "/login",
    },
    {
      name: "More About WAYZ",
      link: "",
      subNav: [
        { name: "About us", link: "/" },
        { name: "Contact us", link: "/" },
        { name: "How it Work", link: "/" },
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
    <nav className="bg-primary flex pt-10 items-start justify-around mx-auto text-white dark:bg-primaryDark relative">
      {/* Logo Section */}
      <Image
        src="/logo.png"
        width={150}
        height={70}
        className="relative"
        style={{ width: "auto", height: "auto" }}
        alt="wayz logo"
        priority
      />

      {/* Language Selector and Theme Switcher */}
      <div className="flex items-center">
        <LocalSwitcher />
        <div className="h-8 w-[1px] mx-3 border-e py-1 border-e-white me-3 dark:border-e-white" />
        <ThemeSwitcher />
      </div>

      {/* Dynamic Navigation Links */}
      <ul className="flex items-center gap-7 font-bold">
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
                  <div className="absolute bg-white rotate-[40deg] top-[-5px] right-[50%] w-6 h-6 rounded-[5px] z-0"></div>

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
