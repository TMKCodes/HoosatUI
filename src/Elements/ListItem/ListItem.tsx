import React, { LiHTMLAttributes } from 'react';

import './ListItem.scss';

interface ListItemProps extends LiHTMLAttributes<HTMLLIElement>{
}

export const ListItem: React.FC<ListItemProps> = ({
  children,
  ...rest
}) => {
  return (
    <li {...rest} className={`ListItem ${rest.className}`}>{ children }</li>
  );
}