import Image from "next/image";

const SignWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex h-[100vh]">
      <div
        className="w-[40%] flex items-center justify-center bg-primary bg-[url('/Images/backLogo.png')] bg-cover bg-center relative"
        style={{ backgroundPosition: "center" }}
      >
        <div className="relative w-[150px] h-[240px] xl:w-[200px] xl:h-[290px]">
          <Image src={"/logo.png"} alt="Logo" fill />
        </div>
      </div>

      <div
        className="w-[60%] text-white p-5 xl:p-24 bg-primary bg-[url('/Images/squares.png')] bg-center bg-no-repeat "
        style={{ backgroundSize: "90% auto" }}
      >
        {children}
      </div>
    </div>
  );
};

export default SignWrapper;
