"use client"
import React, { useState } from "react";
import SignWrapper from "@/app/components/SignWrapper";
import { FcGoogle } from "react-icons/fc";
import Input from "@/app/components/Reusables/Input";
import Button from "@/app/components/Reusables/Button";
import LocalizedLink from "@/app/components/Reusables/LocalizedLink";
const HorizontalSeparator = () => {
  return <div className="h-[1px]  flex-grow  bg-[#377FC1] hidden md:block" />;
};

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  return (
    <SignWrapper>
      {/* Adjust container width on larger screens */}
      <div className="flex flex-col items-start   md:w-3/4 lg:w-1/2 ">
        <h1 className="mb-4 text-xl sm:text-2xl text-center text-white">
          Welcome back
        </h1>
        <h2 className="text-3xl sm:text-5xl font-semibold mb-6 text-center">
          Sign In Now
        </h2>

        <div className="w-full max-w-md">
          <form className="w-full">
            <div className="mb-4">
              <Input
                label="Email Address"
                value={email}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)} 
              />
            </div>
            <div className="mb-6">
              <Input
                label="Password"
                value={password}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
                isPassword
                showPassword={showPassword}
                setShowPassword={setShowPassword}
              />
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-between mb-4">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  className="form-checkbox accent-[#1F6EB6]"
                  style={{ accentColor: "#1F6EB6" }}
                />
                <span className="ml-2 text-sm text-white">Remember Me</span>
              </label>
              <LocalizedLink
                className="inline-block  text-sm text-[#F6B60B] hover:text-blue-800 mt-2 sm:mt-0"
                href="#" 
              >
                Forgot Password?
              </LocalizedLink>
            </div>
            <Button
              className="font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
              backgColor="white"
              type="button"
            >
              Sign In
            </Button>

          </form>

          {/* Centered Section Below the Form */}
          <div className="flex flex-col items-center mt-6">
            <p className="text-white text-center">
              Don't Have An Account Yet?{" "}
              <LocalizedLink
                href="#"  
                className="text-[#F6B60B] font-semibold hover:underline"
              >
                Sign Up
              </LocalizedLink>
            </p>

            <div className="mt-6">
              <div className="flex items-center my-4">
                <HorizontalSeparator />
                <span className="mx-4 text-white">Or</span>
                <HorizontalSeparator />
              </div>

              <button className="flex items-center justify-center border rounded-full py-2 px-4 mt-4 bg-[#0D4170] border-none">
                <FcGoogle className="me-2" size={22} />
                Continue With Google
              </button>
            </div>
          </div>
        </div>
      </div>
    </SignWrapper>
  );
};
export default Signin;