import Image from 'next/image';

const SignWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='flex h-screen'>
      {/* Left Fixed Container */}
      <div
        className="w-[40%] h-screen flex items-center justify-center bg-primary bg-[url('/Images/backLogo.png')] bg-cover bg-center fixed left-0 top-0"
        style={{ backgroundPosition: 'center' }}
      >
        <div className='relative w-[150px] h-[240px] xl:w-[200px] xl:h-[290px]'>
          <Image
            src={'/logo.png'}
            alt='Logo'
            fill
            sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
          />
        </div>
      </div>

      {/* Right Scrollable Container */}
      <div
        className="w-[60%] text-white p-5 xl:p-24 bg-primary bg-[url('/Images/squares.png')] bg-center bg-no-repeat ml-[40%] overflow-y-auto"
        style={{ backgroundSize: '90% auto', height: '100vh' }}
      >
        {children}
      </div>
    </div>
  );
};

export default SignWrapper;
