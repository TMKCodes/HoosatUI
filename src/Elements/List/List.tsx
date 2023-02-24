import React, { OlHTMLAttributes } from 'react';

import './List.scss';

interface ListProps extends OlHTMLAttributes<HTMLOListElement>{
  marker?: string
}

export const List: React.FC<ListProps> = ({
  children,
  marker,
  ...rest
}) => {
  return (
    <>
      { (marker === "ol") 
        ? <ol {...rest} className={`List ${rest.className}`}>{ children }</ol>
        : <ul {...rest} className={`List ${rest.className}`}>{ children }</ul>
      }
    </>
  );
}