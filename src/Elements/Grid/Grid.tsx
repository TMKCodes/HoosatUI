import React, { HTMLAttributes } from 'react';

import './Grid.scss';

interface GridProps extends HTMLAttributes<HTMLDivElement>{

}

interface GridItemProps extends HTMLAttributes<HTMLDivElement>{

}

export const Grid: React.FC<GridProps> = ({
  children,
  ...rest
}) => {
  return (
    <div {...rest} className={`Grid ${rest.className}`} >{ children }</div>
  );
}

export const GridItem: React.FC<GridItemProps> = ({
  children,
  ...rest
}) => {
  return (
    <div {...rest} className={`GridItem ${rest.className}`} >{ children }</div>
  );
}