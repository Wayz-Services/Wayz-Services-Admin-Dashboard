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
    <footer className="bg-[#0059AB] text-white py-5 md:py-10 md:text-sm lg:text-base">
      <div className="container mx-auto px-6 lg:px-20">
        <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-5 gap-8 md:gap-4 pb-5 md:py-10 text-center sm:text-left">
          {/* Logo Section */}
          <div className="relative flex items-center justify-center">
            <div className="relative w-[100px] h-[150px] md:absolute md:top-[-120px] md:w-[200px] md:h-[330px]">
              <Image
                src={"/logo.png"}
                fill
                alt="WAYZ logo"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                priority
                unoptimized
              />
            </div>
          </div>

          {/* Quick Links & Support - Placed in One Line on Small Screens */}
          <div className="flex justify-center gap-8 sm:contents">
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

          {/* Follow Us & Download App - Placed in One Row on Small Screens */}
          <div className="flex flex-col justify-center gap-6 sm:contents">
            {/* Follow Us */}
            <div>
              <h2 className="font-semibold mb-3">{t("follow_us")}</h2>

              <nav className="flex space-x-4 rtl:space-x-reverse justify-center sm:justify-normal">
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
              <div className="space-y-3 flex flex-col items-center sm:items-start">
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
                    <p className="font-semibold">{t("app_store")}</p>
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
                    <p className="font-semibold">{t("google_play")}</p>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full h-[1px] bg-[#7296B6]" />

        {/* Copyright & Links */}
        <div className="mt-8 flex flex-col md:flex-row justify-between text-sm">
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
