import React, { FC } from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
}

const Button: FC<ButtonProps> = ({
  className,
  children,
  variant = 'white',
  ...props
}) => {
  return (
    <button
      {...props}
      className={`py-1 w-full px-4 rounded-full border bg-${variant} text-${getTextColorFromVariant(
        variant
      )} font-medium hover:bg-${variant}-darker transition-all border-grey-light text-sm ${className}`}
    >
      {children}
    </button>
  );
};

const getTextColorFromVariant = (variant: Variant) => {
  return variant === 'white' ? 'dark' : 'white';
};

export default Button;
