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
    href: "https://www.linkedin.com/company/wayz",
  },
];

const Footer = () => {
  const t = useTranslations("Footer");

  return (
    <footer className="bg-[#0059AB] text-white py-10">
      <div className="container mx-auto px-6 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-4 py-10">
          {/* Logo Section */}
          <div>
            <h1 className="text-4xl font-bold">{t("wayz")}</h1>
          </div>

          {/* Quick Links */}
          <FooterLinkList
            title={t("quick_links")}
            links={[
              { label: t("our_services"), href: "#" },
              { label: t("im_a_supplier"), href: "#" },
              { label: t("more_about_wayz"), href: "#" },
            ]}
          />

          {/* Support */}
          <FooterLinkList
            title={t("support")}
            links={[
              { label: t("customer_support"), href: "#" },
              { label: t("advertise_with_us"), href: "#" },
              { label: t("careers_privacy"), href: "#" },
              { label: t("contact_us"), href: "#" },
            ]}
          />

          {/* Follow Us */}
          <div>
            <h2 className="font-semibold mb-3">{t("follow_us")}</h2>
            <nav className="flex space-x-4 rtl:space-x-reverse">
              {socialMedia.map(({ icon, href }) => (
                <Link
                  key={href}
                  href={href}
                  className="p-2 border border-white rounded-full"
                  target="_blank"
                >
                  {icon}
                </Link>
              ))}
            </nav>
          </div>

          {/* Download Our App */}
          <div>
            <h2 className="font-semibold mb-3">{t("download_our_app")}</h2>
            <div className="space-y-3">
              <Link
                href="https://apps.apple.com/us/app/wayz-services/id6740003970"
                className="flex items-center border border-gray-300 rounded-md px-2 py-1 w-fit"
                target="blank"
              >
                <Image
                  src={appleLogo}
                  alt="App Store"
                  style={{ width: 20, height: 25 }}
                />
                <div className="ms-2">
                  <p className="text-xs">{t("download_on_the")}</p>
                  <p className="text-base font-semibold">{t("app_store")}</p>
                </div>
              </Link>

              <Link
                href="https://play.google.com/store/apps/details?id=com.technoleb.wayz&hl=en"
                className="flex items-center border border-gray-300 rounded-md px-2 py-1 w-fit"
                target="blank"
              >
                <Image
                  src={playstoreLogo}
                  alt="Play Store"
                  width={20}
                  height={20}
                />
                <div className="ms-2">
                  <p className="text-xs">{t("get_it_on")}</p>
                  <p className="text-base font-semibold">{t("google_play")}</p>
                </div>
              </Link>
            </div>
          </div>
        </div>

        {/* Copyright & Links */}
        <div className="border-t border-gray-400 mt-8 pt-8 flex flex-col md:flex-row justify-between text-sm">
          <p>{t("copyright")}</p>
          <nav className="flex space-x-6 rtl:space-x-reverse">
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
