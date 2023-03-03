import React, { AreaHTMLAttributes } from 'react';
import './Area.scss';

/**
 * A styled Area tag component.
 * @typedef {Object} AreaProps - Props for the Area component
 * @extends AreaHTMLAttributes<HTMLAreaElement> 
 */
interface AreaProps extends AreaHTMLAttributes<HTMLAreaElement> {

}

/**
 * Area component
 * @param {AreaProps} props - Props for the Area component
 * @returns {React.ReactElement} - Rendered Area component
 */
export const Area: React.FC<AreaProps> = ({
  children,
  ...rest
}) => {
  return (
    <area {...rest} className={`Area ${(rest.className !== undefined) ? rest.className : ""}`} alt={(rest.alt !== undefined) ? rest.alt : "Alternative area"}/>
  );
}