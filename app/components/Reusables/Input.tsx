import { IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";

interface InputProps {
  label: string;
  value: string;
  error: string;
  onChange: () => void;
  isPassword?: boolean;
  setShowPassword?: React.Dispatch<React.SetStateAction<boolean>>;
  showPassword?: boolean;
}

const Input: React.FC<InputProps> = ({ ...props }) => {
  const toggleShowPassword = () => {
    props.setShowPassword?.(!props.showPassword);
  };

  return (
    <div>
      <div className="font-medium text-white">{props.label}</div>

      <div className="bg-[#1F6EB6] w-fit border border-solid border-[#76A4CE] rounded-md my-1 text-white pl-1 pr-3 py-2 flex items-center">
        <input
          type={props.isPassword && !props.showPassword ? "password" : "text"}
          className="bg-[#1F6EB6] outline-none"
          value={props.value}
          onChange={props.onChange}
        />

        {props.isPassword &&
          (props.showPassword ? (
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
      <div className="text-sm text-red-400">{props.error}</div>
    </div>
  );
};

export default Input;
