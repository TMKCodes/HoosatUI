import React, { InputHTMLAttributes } from "react";
import './Input.scss';


interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  variant?: 'primary' | 'secondary';
  id?: string,
  label?: string
}

export const Input: React.FC<InputProps> = ({
  children,
  variant = 'primary',
  ...rest
}) => {
 
  return (
    <>
      { (rest.label !== undefined) &&
        <label htmlFor={(rest.id !== undefined) ? rest.id : rest.label} className={`Input`}>
          {rest.label}
        </label>
      }
      <input
        {...rest}
        id={(rest.id !== undefined) ? rest.id : rest.label }
        className={`Input ${variant} ${rest.className}`}
        >
        {children}
      </input>
    </>
  );
};