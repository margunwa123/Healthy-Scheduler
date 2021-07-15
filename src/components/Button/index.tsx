import React, { FC } from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const Button: FC<ButtonProps> = ({ className, children, ...props }) => {
  return (
    <button
      {...props}
      className={`py-1 w-full px-4 rounded-full border border-grey-light text-sm ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
