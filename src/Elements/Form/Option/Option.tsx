import React, { OptionHTMLAttributes } from "react";
import './Option.scss';

/**
 * Option
 * 
 * @param {OptionProps} props - Props for the Option component 
 * @param {string} [props.variant='primary'] - Variant of the option, either 'primary' or 'secondary' 
 * @param {string} [props.id] - Id of the option element 
 * @param {string} [props.label] - Label of the option element 
 */
interface OptionProps extends OptionHTMLAttributes<HTMLOptionElement> {
  variant?: 'primary' | 'secondary';
  id?: string,
  label?: string
}

/**
 * Option component renders a Option input field
 * @param {OptionProps} data - Props for Option component
 * @returns {JSX.Element} Option component
 */
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