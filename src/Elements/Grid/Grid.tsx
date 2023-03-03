import React, { HTMLAttributes } from 'react';
import './Grid.scss';

/**
 * A styled Grid tag component.
 * @typedef {Object} AnchorProps - Props for the Grid component
 * @extends HTMLAttributes<HTMLDivElement>
 */
interface GridProps extends HTMLAttributes<HTMLDivElement>{

}

/**
 * A styled GridItem tag component.
 * @typedef {Object} AnchorProps - Props for the GridItem component
 * @extends HTMLAttributes<HTMLDivElement>
 */
interface GridItemProps extends HTMLAttributes<HTMLDivElement>{

}

/**
 * Grid component
 * @param {GridProps} props - Props for the Grid component
 * @returns {React.ReactElement} - Rendered Grid component
 */
export const Grid: React.FC<GridProps> = ({
  children,
  ...rest
}) => {
  return (
    <div {...rest} className={`Grid ${(rest.className !== undefined) ? rest.className : ""}`} >{ children }</div>
  );
}

/**
 * GridItem component
 * @param {GridItemProps} props - Props for the GridItem component
 * @returns {React.ReactElement} - Rendered GridItem component
 */
export const GridItem: React.FC<GridItemProps> = ({
  children,
  ...rest
}) => {
  return (
    <div {...rest} className={`GridItem ${(rest.className !== undefined) ? rest.className : ""}`} >{ children }</div>
  );
}