import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import Image from "next/image";
import appleLogo from "@/public/Images/appleLogo.svg";
import playstoreLogo from "@/public/Images/playstoreLogo.svg";
import { useTranslations } from "next-intl";

const Footer = () => {
  const t = useTranslations("Footer");

  return (
    <footer className=" bottom-0 left-0 bg-[#0059AB] text-white py-10">
      <div className="container mx-auto px-6 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-4 py-10">
          {/* Logo Section */}
          <div>
            <h1 className="text-4xl font-bold">{t("wayz")}</h1>
          </div>

          {/* Quick Links */}
          <div>
            <h2 className="font-semibold mb-3">{t("quick_links")}</h2>
            <ul>
              <li className="mb-2">
                <a href="#">{t("our_services")}</a>
              </li>
              <li className="mb-2">
                <a href="#">{t("im_a_supplier")}</a>
              </li>
              <li>
                <a href="#">{t("more_about_wayz")}</a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h2 className="font-semibold mb-3">{t("support")}</h2>
            <ul>
              <li className="mb-2">
                <a href="#">{t("customer_support")}</a>
              </li>
              <li className="mb-2">
                <a href="#">{t("advertise_with_us")}</a>
              </li>
              <li className="mb-2">
                <a href="#">{t("careers_privacy")}</a>
              </li>
              <li>
                <a href="#">{t("contact_us")}</a>
              </li>
            </ul>
          </div>

          {/* Follow Us */}
          <div>
            <h2 className="font-semibold mb-3">{t("follow_us")}</h2>
            <div className="flex space-x-4 rtl:space-x-reverse  rtl:justify-left">
              <a
                href="https://www.facebook.com/WayzServices/"
                className=" p-2 bg-white text-blue-700 rounded-full"
              >
                <FaFacebookF />
              </a>
              <a href="#" className="p-2 bg-white text-blue-700 rounded-full">
                <FaTwitter />
              </a>
              <a
                href="https://www.linkedin.com/company/wayz"
                className="p-2 bg-white text-blue-700 rounded-full"
              >
                <FaLinkedinIn />
              </a>
            </div>
          </div>

          {/* Download Our App */}
          <div>
            <h2 className="font-semibold mb-3">{t("download_our_app")}</h2>
            <div className="space-y-3">
              <a
                href="#"
                className="flex items-center border border-gray-300 rounded-md px-2 py-1 w-fit"
              >
                <Image src={appleLogo} alt="App Store" width={20} height={20} />
                <div className="ms-2">
                  <p className="text-[0.75rem]">{t("download_on_the")}</p>
                  <p className="text-[1rem] font-semibold">{t("app_store")}</p>
                </div>
              </a>
              <a
                href="#"
                className="flex items-center border border-gray-300 rounded-md px-2 py-1 w-fit"
              >
                <Image
                  src={playstoreLogo}
                  alt="Play Store"
                  width={20}
                  height={20}
                />
                <div className="ms-2 bold ">
                  <p className="text-[0.75rem]">{t("get_it_on")}</p>
                  <p className="text-[1rem] font-semibold">
                    {t("google_play")}
                  </p>
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* Copyright & Links */}
        <div className="border-t border-gray mt-8 pt-8 flex flex-col md:flex-row justify-between text-sm rtl:">
          <p>{t("copyright")}</p>
          <div className="flex space-x-6  rtl:space-x-reverse">
            <a href="#">{t("privacy_policy")}</a>
            <a href="#">{t("complaints")}</a>
            <a href="#">{t("terms_and_conditions")}</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
