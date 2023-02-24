import React, { MapHTMLAttributes } from 'react';

import './ImageMap.scss';

interface ImageMapProps extends MapHTMLAttributes<HTMLMapElement> {

}

export const ImageMap: React.FC<ImageMapProps> = ({
  children,
  ...rest
}) => {
  return (
    <map {...rest} className={`Map ${rest.className}`}>{ children }</map>
  );
}