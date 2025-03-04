import Image from "next/image";
import React from "react";

const SSS = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex h-[100vh]">
      <div
        className="w-[40%] flex items-center justify-center bg-primary bg-[url('/Images/backLogo.png')] bg-cover bg-center relative"
        style={{ backgroundPosition: "center" }}
      >
        <Image src={"/logo.png"} alt="Logo" width={200} height={200} />
      </div>
      <div
        className="w-[60%] text-white p-24 bg-primary bg-[url('/Images/squares.png')] bg-center bg-no-repeat "
        style={{ backgroundSize: "90% auto" }}
      >
        {children}
      </div>
    </div>
  );
};

export default SSS;
