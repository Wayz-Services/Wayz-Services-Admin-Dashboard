import { FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import Image from "next/image";
import appleLogo from "@/public/Images/appleLogo.svg";
import playstoreLogo from "@/public/Images/playstoreLogo.svg";
import { useTranslations } from "next-intl";
import LocalizedLink from "./Reusables/LocalizedLink";
import Link from "next/link";

interface SocialMediaLink {
  icon: React.ReactElement;
  href: string;
}

// Reusable Footer Link List Component
const FooterLinkList = ({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string }[];
}) => (
  <div>
    <h2 className="font-semibold mb-3">{title}</h2>
    <ul className="space-y-2">
      {links.map((link) => (
        <li key={link.label}>
          <LocalizedLink href={link.href}>{link.label}</LocalizedLink>
        </li>
      ))}
    </ul>
  </div>
);

const socialMedia: SocialMediaLink[] = [
  {
    icon: <FaFacebookF />,
    href: "https://www.facebook.com/WayzServices/",
  },
  { icon: <FaInstagram />, href: "https://www.instagram.com/wayzservices/" },
  {
    icon: <FaLinkedinIn />,
    href: "https://www.linkedin.com/company/wayzservices/",
  },
];

const Footer = () => {
  const t = useTranslations("Footer");

  return (
    <footer className="bg-[#0059AB] text-white py-10">
  <div className="container mx-auto px-6 lg:px-20">
    <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-4 py-10 text-center md:text-left">
      
      {/* Logo Section - Centered on Mobile */}
      <div className="flex justify-center md:block">
        <h1 className="text-4xl font-bold">{t("wayz")}</h1>
      </div>

      {/* Quick Links & Support - Stacked on Mobile */}
      <div className="grid grid-cols-2 gap-6 md:grid-cols-2 md:col-span-2 text-start">
        <FooterLinkList
          title={t("quick_links")}
          links={[
            { label: t("our_services"), href: "#" },
            { label: t("im_a_supplier"), href: "#" },
            { label: t("more_about_wayz"), href: "#" },
          ]}
        />
        <FooterLinkList
          title={t("support")}
          links={[
            { label: t("customer_support"), href: "#" },
            { label: t("advertise_with_us"), href: "#" },
            { label: t("careers_privacy"), href: "#" },
            { label: t("contact_us"), href: "#" },
          ]}
        />
      </div>

      {/* Follow Us - Centered on Mobile */}
      <div className="flex flex-col items-center md:items-start">
        <h2 className="font-semibold mb-3">{t("follow_us")}</h2>
        <nav className="flex space-x-4">
          {socialMedia.map(({ icon, href }) => (
            <Link
              key={href}
              href={href}
              className="p-2 border border-white rounded-full"
              target="_blank"
            >
            <span className="text-xl">{icon}</span> 
            </Link>
          ))}
        </nav>
      </div>

      {/* Download Our App   */}
      <div className="flex flex-col items-center md:items-start ms-4">
        <h2 className="font-semibold mb-3">{t("download_our_app")}</h2>
        <div className="space-y-3">
          <Link
            href="https://apps.apple.com/us/app/wayz-services/id6740003970"
            className="flex items-center border border-gray-300 rounded-md px-4 py-2 w-fit  "
            target="blank"
          >
            <Image src={appleLogo} alt="App Store" width={30} height={35} objectFit="contain" />
            <div className="ml-2">
              <p className="text-s">{t("download_on_the")}</p>
              <p className="text-xl font-semibold">{t("app_store")}</p>
            </div>
          </Link>
          <Link
            href="https://play.google.com/store/apps/details?id=com.technoleb.wayz&hl=en"
            className="flex items-center border rounded-md px-4 py-2 w-fit"
            target="blank"
            
          >
            <Image src={playstoreLogo} alt="Play Store" width={35} height={40} objectFit="contain"/>
            <div className="ml-2">
              <p className="text-s">{t("get_it_on")}</p>
              <p className="  text-xl font-semibold">{t("google_play")}</p>
              
            </div>
          </Link>
        </div>
      </div>
    </div>

    {/* Divider */}
    <div className="w-full h-[1px] bg-[#7296B6]" />

    {/* Copyright & Links */}
    <div className="mt-8 flex flex-col md:flex-row justify-between text-sm text-center md:text-left">
      <p>{t("copyright")}</p>
      <nav className="flex flex-wrap justify-center md:justify-start space-x-6">
        <LocalizedLink href="#">{t("privacy_policy")}</LocalizedLink>
        <LocalizedLink href="#">{t("complaints")}</LocalizedLink>
        <LocalizedLink href="#">{t("terms_and_conditions")}</LocalizedLink>
      </nav>
    </div>
  </div>
</footer>
  );
};

export default Footer;
