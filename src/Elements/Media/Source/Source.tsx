import React, { SourceHTMLAttributes } from 'react';

/**
 * A Source tag component.
 * @typedef {Object} SourceProps - Props for the Source component
 * @extends SourceHTMLAttributes<HTMLSourceElement>
 */
interface SourceProps extends SourceHTMLAttributes<HTMLSourceElement> {

}

/**
 * Source component
 * @param {SourceProps} props - Props for the Source component
 * @returns {React.ReactElement} - Rendered Source component
 */
export const Source: React.FC<SourceProps> = ({
  ...rest
}) => {
  return (
    <Source {...rest} className={`Source ${(rest.className !== undefined) ? rest.className : ""}`} />
  );
}