import { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  redirectTo?: string;
  onClick?: () => void;
  backgColor?: 'blue' | 'white';
  isLoading?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  className,
  children,
  onClick,
  backgColor = 'blue',
  isLoading = false,
  ...rest
}) => {
  const isBackPrimary =
    backgColor === 'blue' ? 'bg-primary text-white' : 'bg-white text-primary';

  return (
    <button
      {...rest}
      className={`${className} ${isBackPrimary} py-2 hover:opacity-70 font-semibold rounded-md`}
      onClick={onClick}
    >
      {isLoading ? 'Loading...' : children}
    </button>
  );
};

export default Button;
