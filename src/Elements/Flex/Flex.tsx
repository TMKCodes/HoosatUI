import React, { HTMLAttributes } from 'react';

import './Flex.scss';

interface FlexProps extends HTMLAttributes<HTMLDivElement>{

}

export const Flex: React.FC<FlexProps> = ({
  children,
  ...rest
}) => {
  return (
    <div {...rest} className={`Flex ${rest.className}`} >{ children }</div>
  );
}