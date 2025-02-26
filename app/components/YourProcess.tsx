"use client";
import { MdOutlineArrowOutward } from "react-icons/md";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";

const steps = [1, 2, 3];

export default function YourProcess() {
  const t = useTranslations("YourProcess");

  const [isPageLoaded, setIsPageLoaded] = useState(false);

  useEffect(() => {
    const handleLoad = () => {
      setIsPageLoaded(true);
    };

    if (document.readyState === "complete") {
      // If the document is already loaded, run immediately
      handleLoad();
    } else {
      // Otherwise, listen for the load event
      window.addEventListener("load", handleLoad);
    }

    // Cleanup
    return () => {
      window.removeEventListener("load", handleLoad);
    };
  }, []);

  return (
    <section className="bg-[#fff] text-white py-12 px-6">
      <div className="text-center">
        <p className="uppercase text-lg font-semibold tracking-wide text-primary">
          {t("process")}
        </p>
        <h2 className="text-4xl font-semibold mt-2 text-black">{t("title")}</h2>
      </div>

      <div className="mt-10 flex flex-wrap justify-center gap-6">
        {steps.map((id) => (
          <div
            key={id}
            className="bg-primary border z-10 border-white rounded-xl px-1 pb-6 w-72 text-center gap-14 flex flex-col items-center justify-between"
          >
            <div className="bg-white mt-[-1px] z-0 text-primary text-3xl font-semibold px-4 pt-4 flex items-end pb-2 justify-center rounded-b-full">
              {id}
            </div>
            <h3 className="font-extrabold h-4 text-2xl italic">
              {t(`steps.${id}.title`)}
            </h3>
            <p className="text-lg max-h-8">{t(`steps.${id}.description`)}</p>
            <div className="mt-4 flex justify-center">
              <MdOutlineArrowOutward size={40} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
