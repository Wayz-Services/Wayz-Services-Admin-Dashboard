import { useTranslations } from "next-intl";
import Image from "next/image";
import { FaCheckCircle } from "react-icons/fa";

interface FactsProps {
  type: string;
  title: string;
  reached?: string;
}

const Facts = () => {
  const t = useTranslations("Fact");

  const CheckFact: React.FC<FactsProps> = ({ type, title, reached }) => {
    return (
      <div className="flex gap-4">
        <div>
          <FaCheckCircle color="#48B02C" size={40} />
        </div>

        <div className="flex flex-col gap-2">
          <p className="uppercase text-base">{type}</p>
          <p className="font-bold text-2xl">{title}</p>
          <p className="text-3xl">{reached}</p>
        </div>
      </div>
    );
  };

  const factsData = [
    { type: t("work"), title: t("projComplete"), reached: "100+" },
    { type: t("client"), title: t("satisfGu"), reached: "100%" },
    { type: t("staff"), title: t("proStaff"), reached: "1.2K+" },
    { type: t("timeless"), title: t("perfWork") },
  ];

  return (
    <div className="bg-[#F0F6FB]">
      <div className="flex flex-col items-center justify-center font-semibold text-white pt-10 pb-1 bg-[url('/Images/facts.png')] bg-no-repeat bg-center bg-cover rounded-tr-[80px] rounded-tl-[80px]">
        <div className="text-center">
          <h3 className="text-xl uppercase">{t("title")}</h3>

          <h1 className="text-3xl mt-2">{t("subTitle")}</h1>
        </div>

        <div className="flex flex-col w-full items-center justify-center md:flex-row mt-10 md:gap-16 px-4 sm:px-0">
          <div className="flex flex-col md:flex-row md:self-start md:justify-end md:w-[40%] md:ps-3">
            <div className="flex flex-col gap-5 mb-5 md:mb-0 md:gap-10 md:min-h-[300px]">
              {factsData.slice(0, 2).map((fact, index) => (
                <CheckFact key={index} {...fact} />
              ))}
            </div>

            <div className="md:hidden flex justify-start pb-3">
              <div className="flex flex-col gap-5">
                {factsData.slice(2).map((fact, index) => (
                  <CheckFact key={index} {...fact} />
                ))}
              </div>
            </div>
          </div>

          <div className="relative w-full md:w-[20%] flex justify-center">
            <Image
              src={"/Images/factor.png"}
              width={250}
              height={150}
              alt="factor image"
              style={{ width: "auto", height: "auto" }}
              quality={100}
            />
          </div>

          <div className="hidden md:flex md:self-start justify-start pb-3 md:w-[40%] md:pe-3">
            <div className="flex flex-col gap-10 min-h-[300px]">
              {factsData.slice(2).map((fact, index) => (
                <CheckFact key={index} {...fact} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Facts;
