import React, { FormHTMLAttributes, ReactNode } from "react";
import './Form.css';

/**
 *  Form component is used to select an option from a list of options.
 *  @param {FormProps} props - Props for the Form component.
 *  @param {string} [props.variant] - Variant of the select component, primary or secondary.
 *  @param {string} [props.id] - Id of the select element.
 *  @param {string} [props.label] - Label of the select element.
 */
interface FormProps extends FormHTMLAttributes<HTMLFormElement> {
  children?: ReactNode;
  variant?: 'primary' | 'secondary';
}

/**
 * Form component renders a Form input field
 * @param {FormProps} data - Props for Form component
 * @returns {JSX.Element} Form component
 */
export const Form: React.FC<FormProps> = ({
  children,
  variant = 'primary',
  ...rest
}) => {
  return (
    <form {...rest} className={`Form ${variant}${(rest.className !== undefined) ? " " + rest.className : ""}`}>
      {children}
    </form>
  );
};