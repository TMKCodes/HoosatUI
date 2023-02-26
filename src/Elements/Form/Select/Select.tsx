import React, { SelectHTMLAttributes } from "react";
import './Select.scss';


interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  variant?: 'primary' | 'secondary';
  id?: string,
  label?: string
}

export const Select: React.FC<SelectProps> = ({
  children,
  variant = 'primary',
  ...rest
}) => {
 
  return (
    <>
      { (rest.label !== undefined) &&
        <label htmlFor={(rest.id !== undefined) ? rest.id : rest.label} className={`Select`}>
          {rest.label}
        </label>
      }
      <select
        {...rest}
        id={(rest.id !== undefined) ? rest.id : rest.label }
        className={`Select ${variant} ${rest.className}`}
        >
        {children}
      </select>
    </>
  );
};