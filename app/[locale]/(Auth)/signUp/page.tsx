"use client";

import { useState } from "react";
import SignWrapper from "@/app/components/SignWrapper";
import Input from "@/app/components/Reusables/Input";
import { useTranslations } from "next-intl";
import Button from "@/app/components/Reusables/Button"; // Assuming the Button component is in this path
import PhoneInput from "@/app/components/Reusables/PhoneInput";
import Error from "@/app/components/Reusables/Error";

interface FormData {
  firstName: string;
  userName: string;
  email: string;
  password: string;
  confirmPassword: string;
  accountType: string;
  phoneNumber?: string;
}

const SignUp = () => {
  const t = useTranslations("SignUp");
  const [phoneNumber, setPhoneNumber] = useState<string>("");

  const [showPassword, setShowPassword] = useState<boolean>(false);

  const [termsAccepted, setTermsAccepted] = useState(false);

  const [showConfirmPassword, setShowConfirmPassword] =
    useState<boolean>(false);

  const [data, setData] = useState<FormData>({
    firstName: "",
    userName: "",
    email: "",
    password: "",
    confirmPassword: "",
    accountType: "",
  });

  const [errors, setErrors] = useState<FormData & { termsAccepted: string }>({
    firstName: "",
    userName: "",
    phoneNumber: "",
    email: "",
    password: "",
    confirmPassword: "",
    accountType: "",
    termsAccepted: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    setErrors((prevData) => ({
      ...prevData,
      [name]: "",
    }));
  };

  const inputFields = [
    {
      label: t("firstName"),
      name: "firstName",
      value: data.firstName,
      onChange: handleInputChange,
      error: errors.firstName,
    },
    {
      label: t("userName"),
      name: "userName",
      value: data.userName,
      onChange: handleInputChange,
      error: errors.userName,
    },
    {
      label: t("phoneNumber"),
      name: "phoneNumber",
      value: phoneNumber,
      onChange: handleInputChange,
      error: errors.phoneNumber,
    },
    {
      label: t("emailAddress"),
      name: "email",
      value: data.email,
      onChange: handleInputChange,
      error: errors.email,
    },
    {
      label: t("password"),
      name: "password",
      value: data.password,
      isPassword: true,
      showPassword,
      setShowPassword,
      onChange: handleInputChange,
      error: errors.password,
    },
    {
      label: t("confirmPassword"),
      name: "confirmPassword",
      value: data.confirmPassword,
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

  const validateForm = () => {
    let valid = true;
    let newErrors: FormData & { termsAccepted: string } = {
      firstName: "",
      userName: "",
      email: "",
      phoneNumber: "",
      password: "",
      confirmPassword: "",
      accountType: "",
      termsAccepted: "",
    };

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^(?=.*\d)(?=.*[A-Z])(?!.*\s).{8,}$/;

    if (!data.firstName) {
      newErrors.firstName = t("error_enter_firstName");
      valid = false;
    } else if (data.firstName.length < 3) {
      newErrors.firstName = t("error_invalid_firstName");
      valid = false;
    }

    if (!data.userName) {
      newErrors.userName = t("error_enter_userName");
      valid = false;
    } else if (data.userName.length < 3) {
      newErrors.userName = t("error_invalid_userName");
      valid = false;
    }

    if (!data.email) {
      newErrors.email = t("error_enter_email");
      valid = false;
    } else if (!emailRegex.test(data.email)) {
      newErrors.email = t("error_invalid_email");
      valid = false;
    }

    if (phoneNumber.length <= 4) {
      newErrors.phoneNumber = t("error_enter_phoneNumber");
      valid = false;
    } else if (phoneNumber.startsWith("961") && phoneNumber.length < 8) {
      newErrors.phoneNumber = t("error_invalid_phoneNumber");
      valid = false;
    }

    if (!data.password) {
      newErrors.password = t("error_enter_password");
      valid = false;
    } else if (!passwordRegex.test(data.password)) {
      newErrors.password = t("error_invalid_password");
      valid = false;
    }

    if (data.password && !data.confirmPassword) {
      newErrors.confirmPassword = t("error_enter_confirmPassword");
      valid = false;
    } else if (data.password !== data.confirmPassword) {
      newErrors.confirmPassword = t("error_invalid_confirmPassword");
      valid = false;
    }

    if (!data.accountType) {
      newErrors.accountType = t("error_enter_accountType");
      valid = false;
    }

    if (!termsAccepted) {
      newErrors.termsAccepted = t("error_enter_terms");
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSignUp = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
    }
  };

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
          <form onSubmit={handleSignUp}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              {inputFields.map((field) => (
                <div key={field.name} className="relative">
                  {field.name === "phoneNumber" ? (
                    <PhoneInput
                      phoneNumber={phoneNumber}
                      setPhoneNumber={setPhoneNumber}
                      error={errors.phoneNumber}
                      setErrors={setErrors}
                    />
                  ) : (
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
                  )}
                </div>
              ))}
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
                          data[group.name as keyof FormData] === option.value
                        }
                        onChange={handleInputChange}
                        className="me-2 appearance-none bg-white w-3 h-3 border-2 border-gray-300 rounded-full checked:bg-[#F6B60B] focus:outline-none"
                      />

                      {option.label}
                    </label>
                  ))}
                </div>

                {errors.accountType && <Error error={errors.accountType} />}
              </div>
            ))}

            {/* Accept Terms & Conditions */}
            <div>
              <div className="mt-4 flex items-center">
                <input
                  type="checkbox"
                  name="termsAccepted"
                  checked={termsAccepted}
                  onChange={() => {
                    setTermsAccepted(!termsAccepted);
                    setErrors((prevData) => ({
                      ...prevData,
                      termsAccepted: "",
                    }));
                  }}
                  className="me-2 rounded-sm accent-white"
                />

                <span className="underline">{t("acceptTerms")}</span>
              </div>

              {errors.termsAccepted && <Error error={errors.termsAccepted} />}
            </div>

            {/* Create Account Button */}
            <Button className="mt-8 px-8" backgColor="white">
              {t("createAccountButton")}
            </Button>
          </form>
        </div>
      </div>
    </SignWrapper>
  );
};

export default SignUp;
