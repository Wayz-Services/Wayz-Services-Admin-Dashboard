import Carousel from "../components/Carousel";
import YourProcess from "../components/YourProcess";
import HeroSection from "../components/HeroSection";
import Services from "../components/Services"; // Import the Services component

export default function Home() {
  return (
    <div>
      <HeroSection />
      <YourProcess />
      <Services />
      <Carousel />
    </div>
  );
}
