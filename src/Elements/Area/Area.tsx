import React, { AreaHTMLAttributes } from 'react';

import './Area.scss';

interface AreaProps extends AreaHTMLAttributes<HTMLAreaElement> {

}

export const Area: React.FC<AreaProps> = ({
  children,
  ...rest
}) => {
  return (
    <area {...rest} className={`Area ${rest.className}`}/>
  );
}