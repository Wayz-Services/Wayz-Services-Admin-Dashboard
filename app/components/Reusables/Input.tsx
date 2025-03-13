import { IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";

interface InputProps {
  label: string;
  name: string;
  value: string | undefined;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  isPassword?: boolean;
  setShowPassword?: React.Dispatch<React.SetStateAction<boolean>>;
  showPassword?: boolean;
}

const Input: React.FC<InputProps> = ({
  label,
  name,
  value,
  onChange,
  isPassword,
  showPassword,
  setShowPassword,
  error,
}) => {
  const toggleShowPassword = () => {
    setShowPassword?.(!showPassword);
  };

  return (
    <div>
      <label htmlFor={name} className="font-medium text-white">
        {label}
      </label>

      <div
        className="bg-[#1F6EB6] w-full border border-solid border-[#76A4CE] rounded-md my-1 text-white ps-2 pe-3 py-2 flex items-center justify-between"
        style={{ border: error && "1px solid rgb(248 113 113)" }}
      >
        <input
          id={name}
          name={name}
          type={isPassword && !showPassword ? "password" : "text"}
          className="bg-[#1F6EB6] w-full outline-none pe-2"
          value={value}
          onChange={onChange}
          autoComplete={isPassword ? "on" : "off"}
        />

        {isPassword &&
          (showPassword ? (
            <IoEyeOutline
              onClick={toggleShowPassword}
              className="cursor-pointer"
            />
          ) : (
            <IoEyeOffOutline
              onClick={toggleShowPassword}
              className="cursor-pointer"
            />
          ))}
      </div>

      {error && <div className="text-sm text-red-400">{error}</div>}
    </div>
  );
};

export default Input;
