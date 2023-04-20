import React, { LabelHTMLAttributes } from 'react';
import './Label.css';

/**
 * A styled Label tag component.
 * @typedef {Object} LabelProps - Props for the Label component
 * @extends HTMLAttributes<HTMLLabelElement>
 */
interface LabelProps extends LabelHTMLAttributes<HTMLLabelElement> {

}

/**
 * Label component
 * @param {LabelProps} props - Props for the Label component
 * @returns {React.ReactElement} - Rendered Label component
 */
export const Label: React.FC<LabelProps> = ({
  children,
  ...rest
}) => {
  return (
    <label {...rest} className={`Label ${(rest.className !== undefined) ? rest.className : ""}`}>{children}</label>
  );
}