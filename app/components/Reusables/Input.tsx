import { IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";

interface InputProps {
  label: string;
  value: string;
  onChange: () => void;
  error?: string;
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
      <label className="font-medium text-white">{props.label}</label>

      <div className="bg-[#1F6EB6] w-full border border-solid border-[#76A4CE] rounded-md my-1 text-white pl-1 pr-3 py-2 flex items-center justify-between">
        <input
          type={props.isPassword && !props.showPassword ? "password" : "text"}
          className="bg-[#1F6EB6] w-full rounded-md outline-none pe-2"
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

      {props.error && <div className="text-sm text-red-400">{props.error}</div>}
    </div>
  );
};

export default Input;