import Image from "next/image";

interface CardProps {
  title: React.ReactNode;
  description: string;
  imageSrc: string;
  buttonText?: string;
}

const Card: React.FC<CardProps> = ({
  title,
  description,
  imageSrc,
  buttonText = "List your business",
}) => {
  return (
    <div className="flex flex-col md:flex-row items-center bg-white shadow-2xl rounded-2xl p-8 w-full h-auto mx-auto mt-20">
      {/* Image Section (on the Left) */}
      <div className="relative w-full md:w-1/2 h-72 flex-shrink-0 overflow-hidden rounded-2xl">
        <Image
          src={imageSrc}
          alt="Card Image"
          layout="fill"
          objectFit="cover"
          className="rounded-2xl"
        />
      </div>

      {/* Text Section (on the Right) */}
      <div className="flex flex-col items-start text-left pl-8 w-full md:w-1/2 mt-8 md:mt-0">
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">{title}</h2>
        <p className="text-xl text-[#3078BB] mb-4">{description}</p>
        <button className="bg-[#0059AB] hover:bg-blue-800 text-white font-bold py-2 px-3 rounded text-sm">
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default Card;
