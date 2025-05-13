'use client';
import Testimonial from '../../components/InitialScreen/Testimonial';
import OurProcess from '../../components/InitialScreen/OurProcess';
import HeroSection from '../../components/InitialScreen/HeroSection';
import Services from '../../components/InitialScreen/Services'; // Import the Services component
import Facts from '../../components/InitialScreen/Facts';
import ContactSection from '../../components/InitialScreen/Contact';

const Home = () => {
  const Rectangle = () => {
    return (
      <>
        <div className='absolute top-[13px] left-0 w-full h-0 border-l-[50vw] border-r-[50vw] border-b-[100px] border-l-transparent border-r-transparent border-b-secondary'></div>

        <div className='relative z-10 text-white text-center py-14'></div>
      </>
    );
  };

  return (
    <div className='overflow-hidden'>
      <HeroSection />

      <div className='hidden md:block relative w-full mt-[-1px] bg-primary'>
        <Rectangle />
      </div>

      <OurProcess />

      <Facts />

      <Services />

      <ContactSection />

      <Testimonial />
    </div>
  );
};

export default Home;
