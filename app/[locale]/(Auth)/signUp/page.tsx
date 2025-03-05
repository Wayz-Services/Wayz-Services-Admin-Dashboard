"use client";

import { useState } from "react";
import SignWrapper from "@/app/components/SignWrapper";
import Input from "@/app/components/Reusables/Input";
import { useTranslations } from "next-intl";
import Button from "@/app/components/Reusables/Button"; // Assuming the Button component is in this path
import "intl-tel-input/build/css/intlTelInput.css";

interface FormData {
  fullName: string;
  userName: string;
  phoneNumber: string;
  emailAddress: string;
  password: string;
  confirmPassword: string;
  accountType: string;
  applicantStatus: string;
  termsAccepted: boolean;
}

const SignUp = () => {
  const t = useTranslations("SignUp");

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    userName: "",
    phoneNumber: "+961",
    emailAddress: "",
    password: "",
    confirmPassword: "",
    accountType: "",
    applicantStatus: "",
    termsAccepted: false,
  });

  const [errors, setErrors] = useState({
    fullName: "",
    userName: "",
    phoneNumber: "",
    emailAddress: "",
    password: "",
    confirmPassword: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;

    if (name === "phoneNumber") {
      // Ensure the phone number always starts with +961
      if (!value.startsWith("+961")) {
        return;
      }
    }

    if (type === "checkbox") {
      setFormData((prevData) => ({
        ...prevData,
        [name]: checked, // Update checkbox value
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }

    setErrors((prevData) => ({
      ...prevData,
      [name]: "",
    }));
  };

  const inputFields = [
    {
      label: t("fullName"),
      name: "fullName",
      value: formData.fullName,
      onChange: handleInputChange,
      error: errors.fullName,
    },
    {
      label: t("userName"),
      name: "userName",
      value: formData.userName,
      onChange: handleInputChange,
      error: errors.userName,
    },
    {
      label: t("phoneNumber"),
      name: "phoneNumber",
      value: formData.phoneNumber,
      onChange: handleInputChange,
      error: errors.phoneNumber,
    },
    {
      label: t("emailAddress"),
      name: "emailAddress",
      value: formData.emailAddress,
      onChange: handleInputChange,
      error: errors.emailAddress,
    },
    {
      label: t("password"),
      name: "password",
      value: formData.password,
      isPassword: true,
      showPassword,
      setShowPassword,
      onChange: handleInputChange,
      error: errors.password,
    },
    {
      label: t("confirmPassword"),
      name: "confirmPassword",
      value: formData.confirmPassword,
      isPassword: true,
      showPassword: showConfirmPassword,
      setShowPassword: setShowConfirmPassword,
      onChange: handleInputChange,
      error: errors.confirmPassword,
    },
  ];

  const radioGroups = [
    {
      label: t("accountType"),
      name: "accountType",
      options: [
        { label: t("contractor"), value: "contractor" },
        { label: t("customer"), value: "customer" },
      ],
    },
  ];

  return (
    <SignWrapper>
      <div className="flex flex-col items-start justify-center">
        <h1 className="text-white text-xl sm:text-2xl font-medium uppercase ">
          {t("startYourJourney")}
        </h1>

        <p className="text-white text-3xl sm:text-5xl mb-6 font-bold capitalize mt-1">
          {t("createAccount")}
        </p>

        <div className="w-full lg:max-w-2xl">
          <form className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {inputFields.map((field) => (
              <div key={field.name} className="relative">
                <Input
                  label={field.label}
                  name={field.name}
                  value={field.value}
                  onChange={field.onChange}
                  isPassword={field.isPassword}
                  showPassword={field.showPassword}
                  setShowPassword={field.setShowPassword}
                  error={field.error}
                />
              </div>
            ))}
          </form>
        </div>

        {radioGroups.map((group) => (
          <div key={group.name} className="mt-8">
            <p className="text-white text-sm mb-2">{group.label}</p>
            <div className="flex gap-3">
              {group.options.map((option) => (
                <label
                  key={option.value}
                  className="flex items-center text-white"
                >
                  <input
                    type="radio"
                    name={group.name}
                    value={option.value}
                    checked={
                      formData[group.name as keyof FormData] === option.value
                    }
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        [group.name]: e.target.value,
                      })
                    }
                    className="me-2 appearance-none bg-white w-3 h-3 border-2 border-gray-300 rounded-full checked:bg-[#F6B60B] focus:outline-none"
                  />

                  {option.label}
                </label>
              ))}
            </div>
          </div>
        ))}

        {/* Accept Terms & Conditions */}
        <div className="mt-4 flex items-center">
          <input
            type="checkbox"
            name="termsAccepted"
            checked={formData.termsAccepted}
            onChange={handleInputChange}
            className="me-2 rounded-sm accent-white"
          />

          <span className="underline">{t("acceptTerms")}</span>
        </div>

        {/* Create Account Button */}
        <Button className="mt-8 px-8" backgColor="white">
          {t("createAccountButton")}
        </Button>
      </div>
    </SignWrapper>
  );
};

export default SignUp;
