import { useState } from "react";
import Modal from "../Modal";
import { useTranslations } from "next-intl";
import Button from "../Reusables/Button";

const VerificationMethod = ({
  isVisible,
  onClose,
}: {
  isVisible: boolean;
  onClose: () => void;
}) => {
  const t = useTranslations("VerificationMethod");
  const [selectedMethod, setSelectedMethod] = useState<string>("email");

  const verificationMethods = [
    { value: "email", label: t("email_verification") },
    { value: "phone", label: t("phone_verification") },
  ];

  return (
    <Modal isVisible={isVisible} onClose={onClose}>
      <div className="flex flex-col items-center px-8 py-6">
        <h2 className="text-xl font-semibold mb-4 text-center text-primary">
          {t("select_verification_methods")}
        </h2>

        <div>
          {verificationMethods.map(({ value, label }) => (
            <div
              key={value}
              className="mb-3 flex items-center space-x-2 cursor-pointer"
              onClick={() => setSelectedMethod(value)} // Clickable div for selection
            >
              {/* Custom radio button */}
              <div
                className={`w-4 h-4 border-2 border-gray-400 rounded-full flex items-center justify-center transition-all `}
              >
                {selectedMethod === value && (
                  <div className="w-2 h-2 bg-[#F6B60B] rounded-full"></div>
                )}
              </div>

              <span className="text-left">{label}</span>
            </div>
          ))}
        </div>

        <Button className="px-10 mt-4 transition">{t("send_otp")}</Button>
      </div>
    </Modal>
  );
};

export default VerificationMethod;
