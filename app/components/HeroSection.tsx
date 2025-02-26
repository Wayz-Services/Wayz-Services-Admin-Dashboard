import { CiLocationOn, CiSearch } from "react-icons/ci";
import { FiLayers } from "react-icons/fi";
import { useTranslations } from "next-intl";
const HeroSection = () => {
  const t = useTranslations("SearchBar");

  return (
    <div className="bg-[#0059AB] py-20 text-white text-center px-4">
      <div className="max-w-4xl mx-auto mb-8">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          {t("title_part1")}
          <span className="text-yellow-400">{t("title_part2")}</span>
          {t("title_part3")}
        </h1>
        <p className="text-lg">{t("hire_and_pay")}</p>
      </div>

      {/* Search Bar Container */}
      <div className="max-w-4xl mx-auto bg-white rounded-lg flex flex-col md:flex-row p-4 text-gray-700 gap-4 shadow-lg items-stretch">
        {/* Category */}
        <div className="flex items-center gap-2 w-full md:w-auto md:ms-2 flex-1">
          <FiLayers className="text-[#0A65CC] text-xl" size={35} />
          <div className="relative">
  <select
    className="outline-none focus:ring-0 bg-transparent w-full p-2 text-gray-400 data-[value='']:text-gray-400 data-[value]:text-black"
    defaultValue=""
  >
    <option value="" disabled>
      {t("category")}
    </option>
    <option value="Construction">
      {t("construction")}
    </option>
    <option value="Cleaning">
      {t("cleaning")}
    </option>
    <option value="Electrical">
      {t("electrical")}
    </option>
  </select>
</div>

        </div>
        <div className="w-0.5 h-auto bg-gray-200  hidden md:block" />
        {/* Location */}
        <div className="flex items-center gap-2 w-full md:w-auto flex-1">
          <CiLocationOn className="text-[#0A65CC]" size={35} />
          <input
            type="text"
            list={"locations"}
            placeholder={t("location")}
            className="outline-none focus:ring-0 bg-transparent w-full p-2"
          />
          <datalist id="locations">
            <option value="Beirut" />
            <option value="Tripoli" />
            <option value="Sidon" />
          </datalist>
        </div>
        {/* Vertical Separator */}
        <div className="w-0.5 h-auto bg-gray-200   hidden md:block" />
        {/* Job Search */}
        <div className="flex items-center gap-1 w-full md:w-auto max-md:border max-md:border-gray-300 max-md:rounded-md flex-1">
          <CiSearch className="text-[#0A65CC] text-4xl" size={35} />
          <input
            type="text"
            placeholder={t("job_search")}
            className="outline-none focus:ring-0 bg-transparent w-full p-2 "
          />
        </div>
        {/* Search Button */}
        <button className="bg-[#0059AB] text-white px-10 py-2 rounded-md hover:bg-blue-800 w-full md:w-auto ">
          <p className="">{t("search_button")}</p>
        </button>
      </div>
    </div>
  );
};
export default HeroSection;
