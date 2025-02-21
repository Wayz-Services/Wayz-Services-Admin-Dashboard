import React from "react";

const ContractorLeadBanner: React.FC = () => {
  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center bg-white">
      <div className="h-full w-full bg-white rounded-lg shadow-md p-8 flex flex-col items-center justify-center">
        <div className="text-center pl-40"> {/* Increased pl-20 for more rightward shift */}
          <div className="flex justify-center mb-10">
            <img
              src="/images/rounded-rectangle.png" // Replace with your image path
              alt="Rounded Rectangle"
              className="w-20 h-8"
            />
          </div>

          <p className="text-3xl font-semibold mb-2">Are you a contractor,</p>
          <p className="text-3xl font-semibold mb-6">looking for more clients?</p>

          <p className="text-xl text-gray-700 mb-8">Get instant job leads!</p>

          <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-10 rounded-lg transition">
            List your business
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContractorLeadBanner;