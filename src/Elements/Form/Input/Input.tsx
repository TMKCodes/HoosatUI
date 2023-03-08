import React, { InputHTMLAttributes } from "react";
import './Input.scss';

/**
 * Input is a React component that renders an HTML input element with optional label and variant.
 * 
 * @param {InputProps} props - Props for the component.
 * @param {string} [props.variant='primary'] - Variant of the input element, either 'primary' or 'secondary'.
 * @param {string} [props.id] - Id of the input element. If not provided, label will be used as id.
 * @param {string} [props.label] - Label of the input element. If not provided, no label will be rendered. 
 */
interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  variant?: 'primary' | 'secondary';
  id?: string,
  label?: string
}

/**
 * Input component renders a Input input field
 * @param {InputProps} data - Props for Input component
 * @returns {JSX.Element} Input component
 */
export const Input: React.FC<InputProps> = ({
  children,
  variant = 'primary',
  ...rest
}) => {
  return (
    <>
      { (rest.label !== undefined) &&
        <label htmlFor={(rest.id !== undefined) ? rest.id : rest.label} className={`InputLabel`}>
          {rest.label}
        </label>
      }
      <input
        {...rest}
        id={(rest.id !== undefined) ? rest.id : rest.label }
        className={`Input ${variant} ${(rest.className !== undefined) ? rest.className : ""}`}
        style={{...rest.style}}
        >
        {children}
      </input>
    </>
  );
};