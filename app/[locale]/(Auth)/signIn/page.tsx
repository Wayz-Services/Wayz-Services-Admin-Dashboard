"use client";
import { useTranslations } from "next-intl";
import React, { useState } from "react";
import SignWrapper from "@/app/components/SignWrapper";
import { FcGoogle } from "react-icons/fc";
import Input from "@/app/components/Reusables/Input";
import Button from "@/app/components/Reusables/Button";
import LocalizedLink from "@/app/components/Reusables/LocalizedLink";

const HorizontalSeparator = () => {
  return <div className="h-[1px] w-full bg-[#377FC1] block" />;
};

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const t = useTranslations("signIn");
  return (
    <SignWrapper>
      {/* Adjust container width on larger screens */}
      <div className="flex flex-col items-start md:w-3/4 lg:w-1/2 ">
        <h1 className="mb-4 text-xl sm:text-2xl text-center text-white">
          {t("welcome_back")}
        </h1>

        <h2 className="text-3xl sm:text-5xl font-semibold mb-6 text-center">
          {t("sign_in_now")}
        </h2>

        <div className="w-full">
          <form>
            <div className="mb-4">
              <Input
                name="Email"
                label={t("email_address")}
                value={email}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setEmail(e.target.value)
                }
              />
            </div>

            <div className="mb-6">
              <Input
                label={t("password")}
                name="Password"
                value={password}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setPassword(e.target.value)
                }
                isPassword
                showPassword={showPassword}
                setShowPassword={setShowPassword}
              />
            </div>

            <div className="flex items-center justify-between mb-4">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  className="accent-white border border-[#64A6E3] rounded-md"
                />

                <span className="ms-2 text-sm text-white">
                  {" "}
                  {t("remember_me")}
                </span>
              </label>

              <LocalizedLink
                className="inline-block  text-sm text-[#F6B60B] hover:underline mt-2 sm:mt-0"
                href="#"
              >
                {t("forgot_password")}
              </LocalizedLink>
            </div>

            <Button
              className="font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
              backgColor="white"
              type="button"
            >
              {t("sign_in")}
            </Button>
          </form>

          {/* Centered Section Below the Form */}
          <div className="flex flex-col items-center mt-6 ">
            <p className="text-white text-center   ">
              {t("dont_have_an_account_yet")}
              <LocalizedLink
                href="/signUp"
                className="text-[#F6B60B] font-semibold hover:underline ms-1"
              >
                {t("sign_up")}
              </LocalizedLink>
            </p>
          </div>

          <div className="flex items-center my-4">
            <HorizontalSeparator />
            <span className="mx-4 text-white"> {t("or")}</span>
            <HorizontalSeparator />
          </div>

          <div className="flex items-center justify-center">
            <button className="flex items-center justify-center border rounded-full py-2 px-4 bg-[#0D4170] border-none hover:opacity-70">
              <FcGoogle className="me-2" size={22} />
              {t("continue_with_google")}
            </button>
          </div>
        </div>
      </div>
    </SignWrapper>
  );
};
export default Signin;
