import { useState } from "react";
import Modal from "../Modal";
import { useTranslations } from "next-intl";
import Button from "../Reusables/Button";
import { MdEmail, MdPhone, MdKeyboardArrowRight } from "react-icons/md";

const VerificationMethod = ({
  isVisible,
  onClose,
}: {
  isVisible: boolean;
  onClose: () => void;
}) => {
  const t = useTranslations("VerificationMethod");
  const [selectedMethod, setSelectedMethod] = useState<string>("");

  const verificationMethods = [
    {
      value: "email",
      label: t("email_verification"),
      icon: <MdEmail size={25} />,
    },
    {
      value: "phone",
      label: t("phone_verification"),
      icon: <MdPhone size={25} />,
    },
  ];

  return (
    <Modal isVisible={isVisible} onClose={onClose}>
      <div className="flex flex-col items-center">
        <h2 className="text-xl font-semibold mb-4 text-center text-primary">
          {t("select_verification_methods")}
        </h2>

        <div className="w-full">
          {verificationMethods.map((method, index) => (
            <div
              key={index}
              className={`mb-3 flex items-center justify-between gap-2 cursor-pointer border rounded-md px-4 py-2 transition-all ${
                selectedMethod === method.value
                  ? "bg-primary text-white border-primary"
                  : "border-gray-300 hover:bg-gray-100"
              }`}
              onClick={() => setSelectedMethod(method.value)}
            >
              <div className="flex items-center gap-3">
                {method.icon}
                <span>{method.label}</span>
              </div>

              <MdKeyboardArrowRight size={25} />
            </div>
          ))}
        </div>

        <Button className="px-10 mt-4 transition">{t("send_otp")}</Button>
      </div>
    </Modal>
  );
};

export default VerificationMethod;
