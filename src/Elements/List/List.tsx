import React, { OlHTMLAttributes, LiHTMLAttributes } from 'react';

import './List.scss';

interface ListProps extends OlHTMLAttributes<HTMLOListElement> {
  marker?: string
}
interface ListItemProps extends LiHTMLAttributes<HTMLLIElement> {

}

export const List: React.FC<ListProps> = ({
  children,
  marker,
  ...rest
}) => {
  return (
    <>
      { (marker === "ol") 
        ? <ol {...rest} className={`List ${rest.className}`} style={{ listStyleType: "disc", ...rest.style }}>{ children }</ol>
        : (marker === "ul") 
        ? <ul {...rest} className={`List ${rest.className}`} style={{ listStyleType: "number", ...rest.style }}>{ children }</ul>
        : <ul {...rest} className={`List ${rest.className}`} style={{ listStyleType: "none", ...rest.style }}>{ children }</ul>
      }
    </>
  );
}

export const ListItem: React.FC<ListItemProps> = ({
  children,
  ...rest
}) => {
  return (
    <li {...rest} className={`ListItem ${rest.className}`}>{ children }</li>
  );
}