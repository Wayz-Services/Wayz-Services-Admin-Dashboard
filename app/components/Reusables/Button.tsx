import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  redirectTo?: string;
  onClick?: () => void;
  backgColor?: "blue" | "white";
}

const Button: React.FC<ButtonProps> = ({
  className,
  children,
  onClick,
  backgColor = "blue",
  ...rest
}) => {
  const isBackPrimary =
    backgColor === "blue" ? "bg-primary text-white" : "bg-white text-primary";

  return (
    <button
      {...rest}
      className={`${className} ${isBackPrimary} py-2 hover:opacity-70 rounded-md`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
