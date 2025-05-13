import LocalizedLink from './LocalizedLink';

interface LinkButtonProps {
  className?: string;
  href: string;
  children: React.ReactNode;
  bg?: 'white' | 'blue';
}

const LinkButton: React.FC<LinkButtonProps> = ({
  className = '',
  href,
  children,
  bg,
  ...rest
}) => {
  const bgClass =
    bg === 'white'
      ? 'bg-white text-[#0C8CE9]'
      : bg === 'blue'
        ? 'bg-[#0C8CE9] text-white'
        : '';

  const baseStyles = bg ? 'px-4 py-2 rounded-lg' : '';

  return (
    <LocalizedLink
      href={href}
      className={`${bgClass} ${baseStyles} ${className}`}
      {...rest}
    >
      {children}
    </LocalizedLink>
  );
};

export default LinkButton;
