import Image from "next/image";
import Button from "./Reusables/Button";

const ListYourBusiness = () => {
  return (
    <div
      className="relative top-[-95px] w-[100%] sm:w-[80%] xl:w-[60%] flex flex-col md:flex-row p-6 gap-16 min-h-[300px] items-center justify-center bg-white rounded-lg"
      style={{ boxShadow: "0px 7px 5px 1px rgba(184, 184, 184, 0.25)" }}
    >
      <div className="relative w-[100%] h-[300px] sm:h-[250px] lg:h-[300px] xl:h-[350px]">
        <Image
          src="/Images/Card.png"
          fill
          unoptimized
          className="rounded-[20px]"
          alt="image"
        />
      </div>

      <div className="text-black">
        <p className="font-semibold text-3xl">
          Are you a contractor, looking for more clients?
        </p>

        <p className="text-primary py-3 text-2xl">Get instant job leads!</p>

        <Button className="px-6 w-[100%] sm:w-auto">List Your Business</Button>
      </div>
    </div>
  );
};

export default ListYourBusiness;
