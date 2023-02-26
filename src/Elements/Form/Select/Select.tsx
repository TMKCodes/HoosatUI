import React, { SelectHTMLAttributes } from "react";
import './Select.scss';

/**
 *  Select component is used to select an option from a list of options.
 *  @param {SelectProps} props - Props for the Select component.
 *  @param {string} [props.variant] - Variant of the select component, primary or secondary.
 *  @param {string} [props.id] - Id of the select element.
 *  @param {string} [props.label] - Label of the select element.
 */
interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  variant?: 'primary' | 'secondary';
  id?: string,
  label?: string
}

/**
 * Select component renders a Select input field
 * @param {SelectProps} data - Props for Select component
 * @returns {JSX.Element} Select component
 */
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