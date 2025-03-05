import { MdOutlineArrowOutward } from "react-icons/md";
import { useTranslations } from "next-intl";
import ListYourBusiness from "./ListYourBusiness";

const steps = [1, 2, 3];

export default function OurProcess() {
  const t = useTranslations("OurProcess");

  return (
    <section className="bg-secondary flex flex-col items-center text-white pb-12">
      <ListYourBusiness />

      <div className="text-center px-6">
        <p className="uppercase text-lg font-semibold tracking-wide text-primary">
          {t("process")}
        </p>
        <h2 className="text-3xl md:text-4xl font-semibold mt-2 text-black">
          {t("title")}
        </h2>
      </div>

      <div className="mt-10 flex flex-wrap justify-center gap-6 px-6">
        {steps.map((id) => (
          <div
            key={id}
            className="bg-primary border z-10 w-full border-white rounded-xl px-1 pb-6 sm:w-72 text-center gap-8  sm:gap-14 flex flex-col items-center justify-between"
          >
            <div className="bg-[#F0F6FB] mt-[-1px] z-0 text-primary text-3xl font-semibold px-4 pt-4 flex items-end pb-2 justify-center rounded-b-full">
              {id}
            </div>

            <h3 className="font-extrabold h-4 text-2xl italic">
              {t(`steps.${id}.title`)}
            </h3>

            <p className="text-lg max-h-8">{t(`steps.${id}.description`)}</p>

            <div className="mt-4 flex justify-center rtl:rotate-[-90deg]">
              <MdOutlineArrowOutward size={40} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
