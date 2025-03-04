import { CiLocationOn, CiSearch } from "react-icons/ci";
import { FiLayers } from "react-icons/fi";
import { useTranslations } from "next-intl";
import Button from "../Reusables/Button";

const HeroSection = () => {
  const t = useTranslations("SearchBar");

  const VerticalSeparator = () => {
    return <div className="w-0.5 h-auto bg-gray-200 hidden md:block" />;
  };

  return (
    <div
      className="bg-primary pb-20 text-white text-center px-4 md:bg-[url('/Images/InitialScreen/magnet.png'),url('/Images/InitialScreen/eye.png')] md:bg-no-repeat"
      style={{
        backgroundPosition: "right bottom, left center",
        backgroundSize: "contain, 150px auto",
      }}
    >
      <div className="max-w-4xl mx-auto mb-8">
        <h1 className="text-3xl md:text-4xl font-normal mb-4">
          {t("title_part1")}
          <span className="text-yellow-400 font-bold">{t("title_part2")}</span>
          {t("title_part3")}
        </h1>

        <p className="text-lg">{t("hire_and_pay")}</p>
      </div>

      {/* Search Bar Container */}
      <div className="max-w-4xl mx-auto rounded-lg flex flex-col text-gray-700 gap-4 shadow-lg items-stretch md:flex-row md:bg-white">
        {/* Category */}
        <div className="flex items-center gap-2 w-full flex-1 bg-white p-2 rounded-lg md:w-auto md:ms-2">
          <FiLayers className="text-primary" size={35} />

          <div className="relative w-full">
            <select
              className="outline-none focus:ring-0 bg-transparent w-full ps-2 text-gray-400 data-[value='']:text-gray-400 data-[value]:text-black"
              defaultValue=""
            >
              <option value="" disabled>
                {t("category")}
              </option>
              <option value="Construction">{t("construction")}</option>
              <option value="Cleaning">{t("cleaning")}</option>
              <option value="Electrical">{t("electrical")}</option>
            </select>
          </div>
        </div>

        <VerticalSeparator />

        {/* Location */}
        <div className="flex items-center gap-2 w-full bg-white p-2 rounded-lg md:w-auto flex-1">
          <CiLocationOn className="text-primary" size={35} />
          <input
            type="text"
            list={"locations"}
            placeholder={t("location")}
            className="outline-none focus:ring-0 bg-transparent w-full ps-2"
          />

          <datalist id="locations">
            <option value="Beirut" />
            <option value="Tripoli" />
            <option value="Sidon" />
          </datalist>
        </div>

        {/* Vertical Separator */}
        <VerticalSeparator />

        {/* Job Search */}
        <div className="flex items-center gap-1 bg-white p-2 rounded-lg w-full md:w-auto max-md:rounded-md flex-1">
          <CiSearch className="text-[#0A65CC] text-4xl" size={35} />

          <input
            type="text"
            placeholder={t("job_search")}
            className="outline-none focus:ring-0 bg-transparent w-full ps-2"
          />
        </div>

        {/* Search Button */}
        <div className="bg-white p-2 rounded-lg">
          <Button className="text-white w-full px-14 p-2 ">
            {t("search_button")}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
