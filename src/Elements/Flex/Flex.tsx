import React, { HTMLAttributes, ReactNode } from 'react';
import './Flex.css';

/**
 * @typedef {Object} FlexProps - Props for the Flex component
 * @extends HTMLAttributes<HTMLDivElement>
 */
interface FlexProps extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
}

/**
 * @typedef {Object} FlexItemProps - Props for the FlexItem component
 * @extends HTMLAttributes<HTMLDivElement>
 */
interface FlexItemProps extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
}

/**
 * Flex component
 * @param {FlexProps} props - Props for the Flex component
 * @returns {React.ReactElement} - Rendered Flex component
 */
export const Flex: React.FC<FlexProps> = ({
  children,
  ...rest
}: FlexProps): React.ReactElement => {
  return (
    <div {...rest} className={`Flex${(rest.className !== undefined) ? " " + rest.className : ""}`} >{ children }</div>
  );
}

/**
 * FlexItem component
 * @param {FlexItemProps} props - Props for the FlexItem component
 * @returns {React.ReactElement} - Rendered FlexItem component
 */
export const FlexItem: React.FC<FlexItemProps> = ({
  children,
  ...rest
}: FlexItemProps): React.ReactElement => {
  return (
    <div {...rest} className={`FlexItem${(rest.className !== undefined) ? " " + rest.className : ""}`} >{ children }</div>
  );
}