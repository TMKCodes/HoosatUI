import React, { ButtonHTMLAttributes } from 'react';
import './Button.scss';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  ...rest
}) => {
  return (
    <button
      {...rest}
      className={`Button ${variant} ${rest.className}`}
      type="button"
      style={{...rest.style}}
    >
      {children}
    </button>
  );
};
