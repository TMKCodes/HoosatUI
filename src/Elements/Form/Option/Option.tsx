import React, { OptionHTMLAttributes } from "react";
import './Option.css';

/**
 * Option
 * 
 * @param {OptionProps} props - Props for the Option component 
 */
interface OptionProps extends OptionHTMLAttributes<HTMLOptionElement> {
}

/**
 * Option component renders a Option input field
 * @param {OptionProps} data - Props for Option component
 * @returns {JSX.Element} Option component
 */
export const Option: React.FC<OptionProps> = ({
  children,
  ...rest
}) => {
 
  return (
    <option
      {...rest}
      className={`Option ${(rest.className !== undefined) ? rest.className : ""}`}
      >
      {children}
    </option>
  );
};