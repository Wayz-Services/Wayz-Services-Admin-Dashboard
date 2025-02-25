import { CiLocationOn, CiSearch } from "react-icons/ci";
import { FiLayers } from "react-icons/fi";

export default function SearchBar() {
  return (
    <div className="bg-[#0059AB] py-20 text-white text-center px-4">
      <div className="max-w-4xl mx-auto mb-8">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          The best way to <span className="text-yellow-400">Find</span> and Hire
          contractors, Suppliers across Lebanon
        </h1>
        <p className="text-lg">
          Hire and pay contractors easier than ever. Even minimize your
          misclassification risks
        </p>
      </div>

      {/* Search Bar Container */}
      <div className="max-w-4xl mx-auto bg-white rounded-lg flex flex-col md:flex-row items-center p-4 text-gray-700 gap-4 shadow-lg">
        {/* Category */}
        <div className="flex items-center gap-2 w-full md:w-auto md:mr-2">
          <FiLayers className="text-[#0A65CC] text-xl" />
          <input
            type="text"
            list="categories"
            placeholder="Category"
            className="outline-none focus:ring-0 bg-transparent w-full md:w-40 p-2"
          />
          <datalist id="categories">
            <option value="Construction" />
            <option value="Cleaning" />
            <option value="Electrical" />
          </datalist>
        </div>
        <div className="w-[1px] h-6 bg-gray-300 mx-2 hidden md:block" />
        {/* Location */}
        <div className="flex items-center gap-2 w-full md:w-auto">
          <CiLocationOn className="text-[#0A65CC] text-xl" />
          <input
            type="text"
            list="locations"
            placeholder="Location"
            className="outline-none focus:ring-0 bg-transparent w-full md:w-40 p-2"
          />
          <datalist id="locations">
            <option value="Beirut" />
            <option value="Tripoli" />
            <option value="Sidon" />
          </datalist>
        </div>
        {/* Vertical Separator */}
        <div className="w-[1px] h-6 bg-gray-300 mx-2 hidden md:block  " /> 
               {/* Job Search */}
        <div className="flex items-center gap-1 w-full md:w-auto max-md:border max-md:border-gray-300 max-md:rounded-md">
          <CiSearch className="text-[#0A65CC] text-xl" />
          <input
            type="text"
            placeholder="Job, Keyword..."
            className="outline-none focus:ring-0 bg-transparent w-full md:w-60 p-2"
          />
        </div>
        {/* Search Button */}
        <button className="bg-[#0059AB] text-white px-6 py-2 rounded-md hover:bg-blue-800 w-full md:w-auto">
          Search
        </button>
      </div>
    </div>
  );
}
