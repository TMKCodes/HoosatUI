import React, { AnchorHTMLAttributes, useEffect } from 'react';
import './Anchor.css';

/**
 * A styled anchor tag component.
 * @typedef {Object} AnchorProps - Props for the Anchor component
 * @param {string} [props.href] - Variant of the Anchor element, either 'primary' or 'secondary'.
 * @extends HTMLAttributes<HTMLDivElement>
 */
interface AnchorProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string,
}

/**
 * Anchor component
 * @param {AnchorProps} props - Props for the Anchor component
 * @returns {React.ReactElement} - Rendered Anchor component
 */
export const Anchor: React.FC<AnchorProps> = ({
  children,
  href,
  ...rest
}: AnchorProps): React.ReactElement => {
  return (
    <a {...rest} href={href} className={`Anchor${(rest.className !== undefined) ? " " + rest.className : ""}`}>{children}</a>
  );
}