import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  redirectTo?: string;
  onSubmit?: () => void;
  backgColor?: string;
}

const Button: React.FC<ButtonProps> = ({
  className,
  children,
  onSubmit,
  backgColor = "primary",
  ...rest
}) => {
  return (
    <button
      {...rest}
      className={`${className} bg-${backgColor} py-2 hover:opacity-70 rounded-md`}
      onClick={onSubmit}
    >
      {children}
    </button>
  );
};

export default Button;
