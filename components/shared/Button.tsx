import { Loader2 } from 'lucide-react';
import { ButtonHTMLAttributes } from 'react';
import { Button } from '../ui/button';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  redirectTo?: string;
  onClick?: (e: React.FormEvent) => void;
  isLoading?: boolean;
  variant?: 'outline' | 'default' | 'link' | 'destructive';
}

const CustomButton: React.FC<ButtonProps> = ({
  className,
  children,
  onClick,
  isLoading = false,
  variant = 'outline',
  ...rest
}) => {
  return (
    <Button
      {...rest}
      variant={variant}
      className={`${className}`}
      onClick={onClick}
      disabled={isLoading}
    >
      {isLoading ? <Loader2 className='animate-spin' /> : children}
    </Button>
  );
};

export default CustomButton;
