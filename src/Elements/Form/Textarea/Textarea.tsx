import React, { TextareaHTMLAttributes } from "react";
import './Textarea.css';

/**
 *  Textarea component is used to select an option from a list of options.
 *  @param {TextareaProps} props - Props for the Textarea component.
 *  @param {string} [props.variant] - Variant of the select component, primary or secondary.
 *  @param {string} [props.id] - Id of the select element.
 *  @param {string} [props.label] - Label of the select element.
 */
interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  variant?: 'primary' | 'secondary';
  id?: string,
  label?: string
}

/**
 * Textarea component renders a Textarea input field
 * @param {TextareaProps} data - Props for Textarea component
 * @returns {JSX.Element} Textarea component
 */
export const Textarea: React.FC<TextareaProps> = ({
  children,
  variant = 'primary',
  ...rest
}) => {
  return (
    <>
      { (rest.label !== undefined) &&
        <label htmlFor={(rest.id !== undefined) ? rest.id : rest.label} className={`TextareaLabel`}>
          {rest.label}
        </label>
      }
      <textarea
        {...rest}
        id={(rest.id !== undefined) ? rest.id : rest.label }
        className={`Textarea ${variant} ${(rest.className !== undefined) ? rest.className : ""}`}>
        {children}
      </textarea>
    </>
  );
};