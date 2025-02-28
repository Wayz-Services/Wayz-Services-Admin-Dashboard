import Carousel from "../components/Carousel";
import YourProcess from "../components/YourProcess";
import HeroSection from "../components/HeroSection";
import Services from "../components/Services"; // Import the Services component
import Facts from "../components/Facts";

export default function Home() {
  const Rectangle = () => {
    return (
      <>
        <div className="absolute top-[13px] left-0 w-full h-0 border-l-[50vw] border-r-[50vw] border-b-[100px] border-l-transparent border-r-transparent border-b-[#F0F6FB]"></div>

        <div className="relative z-10 text-white text-center py-14"></div>
      </>
    );
  };

  return (
    <div className="overflow-hidden">
      <HeroSection />

      <div className="hidden md:block relative w-full bg-primary">
        <Rectangle />
      </div>

      <YourProcess />

      <Facts />

      <Services />

      <Carousel />
    </div>
  );
}
