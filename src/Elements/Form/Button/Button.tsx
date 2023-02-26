import React, { ButtonHTMLAttributes } from 'react';
import './Button.scss';

/**
 * Button component props.
 * @typedef {Object} ButtonProps - Props for Combobox component
 * @param {string} [props.variant='primary'] - Variant of the input element, either 'primary' or 'secondary'.
 * @extends ButtonHTMLAttributes<HTMLButtonElement>
 */
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /** Button variant, default is "primary". */
  variant?: 'primary' | 'secondary';
}

/**
 * Button component.
 * 
 * @param {ButtonProps} props - Component props.
 * @returns {JSX.Element} - Rendered component.
 */
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
      style={{...rest.style}}>
      {children}
    </button>
  );
};




