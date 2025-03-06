import Button from "@/app/components/Reusables/Button";
import { CiSearch } from "react-icons/ci";

const Card = () => {
  return (
    <div className="shadow-lg p-4 font-medium rounded-lg w-fit capitalize flex flex-col items-center">
      <p className="w-3/4 text-center">Air Conditioning</p>
    </div>
  );
};

const page = () => {
  return (
    <div>
      <div className="bg-secondary flex flex-col items-center py-12 ">
        <h1 className="font-bold text-4xl">
          We can help you get Your Services done?
        </h1>

        <h6 className="text-xl mt-4">
          We find top talent that matches your need
        </h6>

        {/* Search input */}
        <div className="flex bg-white items-center rounded-lg p-2 gap-2 mt-5">
          <CiSearch className="text-primary" size={25} />

          <input
            className="border-none outline-none"
            placeholder="Search for Service"
          />

          <Button className="px-10 ">Search</Button>
        </div>
      </div>

      <div className="p-10">
        <Card />
      </div>
    </div>
  );
};

export default page;
