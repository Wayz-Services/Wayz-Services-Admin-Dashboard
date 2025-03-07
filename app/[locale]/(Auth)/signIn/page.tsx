"use client";
import { useTranslations } from "next-intl";
import React, { useState, useCallback } from "react";
import SignWrapper from "@/app/components/SignWrapper";
import { FcGoogle } from "react-icons/fc";
import Input from "@/app/components/Reusables/Input";
import Button from "@/app/components/Reusables/Button";
import LocalizedLink from "@/app/components/Reusables/LocalizedLink";
import { observer } from "mobx-react-lite";
import { authStore } from "@/app/mobx/AuthStore";

interface SignInData {
  email: string;
  password: string;
}

const HorizontalSeparator = () => (
  <div className="h-[1px] w-full bg-[#377FC1]" />
);

const Signin = () => {
  const { SignIn } = authStore;

  const [data, setData] = useState<SignInData>({ email: "", password: "" });
  const [errors, setErrors] = useState<SignInData>({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);

  const t = useTranslations("signIn");

  const handleInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;

      setData((prev) => ({ ...prev, [name]: value.trim() }));
      setErrors((prev) => ({ ...prev, [name]: "" }));
    },
    []
  );

  const validateForm = () => {
    let valid = true;
    let newErrors: SignInData = { email: "", password: "" };

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^(?=.*\d)(?=.*[A-Z])(?!.*\s).{8,}$/;

    if (!data.email) {
      newErrors.email = t("error_enter_email");
      valid = false;
    } else if (data.email.includes("@") && !emailRegex.test(data.email)) {
      newErrors.email = t("error_invalid_email");
      valid = false;
    }

    if (!data.password) {
      newErrors.password = t("error_enter_password");
      valid = false;
    } else if (!passwordRegex.test(data.password)) {
      newErrors.password = t("error_invalid_password");
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSignIn = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      SignIn(data);
    }
  };

  return (
    <SignWrapper>
      <div className="flex flex-col items-start md:w-3/4 lg:w-1/2">
        <h1 className="mb-4 text-xl sm:text-2xl text-center uppercase text-white">
          {t("welcome_back")}
        </h1>

        <h2 className="text-3xl sm:text-5xl font-semibold uppercase mb-6 text-center">
          {t("sign_in_now")}
        </h2>

        <form className="w-full" onSubmit={handleSignIn}>
          <div className="mb-4">
            <Input
              name="email"
              label={t("email_address")}
              value={data.email}
              onChange={handleInputChange}
              error={errors.email}
            />
          </div>

          <div className="mb-6">
            <Input
              name="password"
              label={t("password")}
              value={data.password}
              onChange={handleInputChange}
              isPassword
              showPassword={showPassword}
              setShowPassword={setShowPassword}
              error={errors.password}
            />
          </div>

          <div className="flex items-center justify-between mb-4">
            <label className="flex items-center">
              <input
                type="checkbox"
                className="accent-white border border-[#64A6E3] rounded-md"
              />
              <span className="ms-2 text-sm text-white">
                {t("remember_me")}
              </span>
            </label>

            <LocalizedLink
              className="text-sm text-[#F6B60B] hover:underline"
              href="#"
            >
              {t("forgot_password")}
            </LocalizedLink>
          </div>

          <Button
            className="w-full font-bold py-2 px-4 rounded"
            backgColor="white"
            type="submit"
          >
            {t("sign_in")}
          </Button>
        </form>

        <div className="flex flex-col items-center mt-6">
          <p className="text-white text-center">
            {t("dont_have_an_account_yet")}
            <LocalizedLink
              href="/signUp"
              className="text-[#F6B60B] font-semibold hover:underline ms-1"
            >
              {t("sign_up")}
            </LocalizedLink>
          </p>
        </div>

        <div className="flex w-full items-center my-4">
          <HorizontalSeparator />
          <span className="mx-4 text-white">{t("or")}</span>
          <HorizontalSeparator />
        </div>

        <div className="flex w-full items-center justify-center">
          <button className="flex items-center justify-center border rounded-full py-2 px-4 bg-[#0D4170] hover:opacity-70">
            <FcGoogle className="me-2" size={22} />
            {t("continue_with_google")}
          </button>
        </div>
      </div>
    </SignWrapper>
  );
};

export default observer(Signin);
