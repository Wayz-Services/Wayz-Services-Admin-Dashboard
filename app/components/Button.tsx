import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  redirectTo?: string;
  onSubmit?: () => void;
}

const Button: React.FC<ButtonProps> = ({
  className,
  children,
  onSubmit,
  ...rest
}) => {
  return (
    <button
      {...rest}
      className={`${className} bg-[#3498db] py-2 px-4`}
      onClick={onSubmit}
    >
      {children}
    </button>
  );
};

export default Button;
