import { useTranslations } from "next-intl";
import ServicesImages from "../ServicesImages";

const Services: React.FC = () => {
  const t = useTranslations("Services");

  return (
    <div
      className="relative flex flex-col items-center bg-primary px-4 py-14 lg:py-24 overflow-hidden bg-[url('/Images/InitialScreen/Waves.png')]  bg-no-repeat bg-bottom"
      style={{ backgroundSize: "100% 50%" }}
    >
      <div className="flex flex-col items-center">
        <div className="text-white text-xl md:text-3xl">{t("ourServices")}</div>

        <div className="text-white text-2xl md:text-4xl mt-2 mb-4 font-semibold">
          {t("checkWayzServices")}
        </div>

        <ServicesImages />
      </div>
    </div>
  );
};

export default Services;
