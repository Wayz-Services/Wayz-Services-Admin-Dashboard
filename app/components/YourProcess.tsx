import { MdOutlineArrowOutward } from "react-icons/md";
import { useTranslations } from "next-intl";

const steps = [1, 2, 3];

export default function YourProcess() {
  const t = useTranslations("YourProcess");

  return (
    <section className="bg-[#0059AB] text-white py-12">
      <div className="text-center">
        <p className="uppercase text-sm tracking-wide">{t("process")}</p>
        <h2 className="text-4xl font-bold mt-2">{t("title")}</h2>
      </div>

      <div className="mt-10 flex flex-wrap justify-center gap-6">
        {steps.map((id) => (
          <div
            key={id}
            className="bg-[#0059AB] border border-white rounded-xl pb-6 w-72 text-center gap-14 flex flex-col items-center justify-between"
          >
            <div className="bg-white text-blue-700 text-xl font-semibold w-10 h-12 flex items-end pb-2 justify-center rounded-b-full">
              {id}
            </div>
            <h3 className="font-semibold text-2xl italic">
              {t(`steps.${id}.title`)}
            </h3>
            <p className="text-lg max-h-8">
              {t(`steps.${id}.description`)}
            </p>
            <div className="mt-4 flex justify-center">
              <MdOutlineArrowOutward size={34} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
