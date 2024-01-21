import React, { HTMLAttributes } from 'react';
import './Paragraph.css';

/**
 * A styled Paragraph tag component.
 * @typedef {Object} ParagraphProps - Props for the Paragraph component
 * @extends HTMLAttributes<HTMLParagraphElement>
 */
interface ParagraphProps extends HTMLAttributes<HTMLParagraphElement> {

}

/**
 * Paragraph component
 * @param {ParagraphProps} props - Props for the Paragraph component
 * @returns {React.ReactElement} - Rendered Paragraph component
 */
export const Paragraph: React.FC<ParagraphProps> = ({
  children,
  ...rest
}) => {
  return (
    <p {...rest} className={`Paragraph${(rest.className !== undefined) ? " " + rest.className : ""}`}>{children}</p>
  );
}