"use client";

import { useState, useRef } from "react";
import Modal from "../Modal";
import { useTranslations } from "next-intl";
import Button from "../Reusables/Button";

const OTPModal = ({
  isVisible,
  onClose,
}: {
  isVisible: boolean;
  onClose: () => void;
}) => {
  const t = useTranslations("VerificationModal");
  const [otp, setOtp] = useState(["", "", "", ""]);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  // Handle input change & auto-focus next field
  const handleChange = (index: number, value: string) => {
    if (!/^\d?$/.test(value)) return; // Only allow single digits

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < inputRefs.current.length - 1) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  // Handle backspace & move focus back
  const handleKeyDown = (index: number, e: React.KeyboardEvent) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  return (
    <Modal isVisible={isVisible} onClose={onClose}>
      <div className=" flex flex-col items-center justify-center">
        <h2 className="text-2xl font-semibold mb-2 text-center text-primary">
          {t("otp_verification")}
        </h2>

        <p className="w-3/4 text-lg text-center mb-1">
          {t("otp_sent_message")}:
        </p>

        <p className="font-bold ml-1 break-words">
          mahmoudkhodor@gmail.com
        </p>

        <p className="text-center my-4">{t("enter_otp_message")}</p>

        {/* OTP Input Boxes */}
        <div className="flex gap-2 mb-4">
          {otp.map((digit, index) => (
            <input
              key={index}
              ref={(el) => {
                inputRefs.current[index] = el;
              }}
              type="text"
              className="w-12 h-12 bg-[#D9D9D9]/20 border-2 border-black border-opacity-10 rounded-lg text-center text-lg font-semibold focus:outline-none"
              maxLength={1}
              value={digit}
              onChange={(e) => handleChange(index, e.target.value)}
              onKeyDown={(e) => handleKeyDown(index, e)}
              aria-label={`OTP Digit ${index + 1}`}
            />
          ))}
        </div>

        {/* Resend Code */}
        <div className="text-sm flex gap-1 mb-4">
          <p className="text-gray-500">{t("didnt_receive_code")}</p>

          <button className="text-primary underline hover:opacity-80 transition">
            {t("resend")}
          </button>
        </div>

        {/* Verify Button */}
        <Button className="px-10">{t("verify_otp")}</Button>
      </div>
    </Modal>
  );
};

export default OTPModal;
