import { useTranslations } from "next-intl";
import ReactPhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

interface PhoneInputProps {
  setPhoneNumber: React.Dispatch<React.SetStateAction<string>>;
}

const PhoneInput: React.FC<PhoneInputProps> = ({ setPhoneNumber }) => {
  const t = useTranslations("SignUp");

  const handlePhoneChange = (value: any, country: any) => {
    setPhoneNumber(country.dialCode);
  };

  return (
    <div>
      <label className="font-medium text-white">{t("phoneNumber")}</label>

      <div style={{ direction: "ltr" }}>
        <ReactPhoneInput
          country={"lb"}
          onChange={handlePhoneChange}
          enableSearch
          containerStyle={{
            color: "black",
            height: "42px",
            margin: "4px 0",
          }}
          inputStyle={{
            fontSize: "16px",
            fontFamily: "Inter",
            width: "100%",
            height: "42px",
            borderRadius: "6px",
            border: "1px solid #76A4CE",
            paddingLeft: "50px",
            color: "white",
            backgroundColor: "#1F6EB6",
          }}
          buttonStyle={{
            borderTopLeftRadius: "6px",
            borderBottomLeftRadius: "6px",
            background: "#1F6EB6",
            border: "1px solid #76A4CE",
            fontSize: "16px",
          }}
        />
      </div>
    </div>
  );
};

export default PhoneInput;
