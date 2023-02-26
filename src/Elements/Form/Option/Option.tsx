import React, { OptionHTMLAttributes } from "react";
import './Option.scss';


interface OptionProps extends OptionHTMLAttributes<HTMLOptionElement> {
  variant?: 'primary' | 'secondary';
  id?: string,
  label?: string
}

export const Option: React.FC<OptionProps> = ({
  children,
  variant = 'primary',
  ...rest
}) => {
 
  return (
    <option
      {...rest}
      className={`Option ${variant} ${rest.className}`}
      >
      {children}
    </option>
  );
};