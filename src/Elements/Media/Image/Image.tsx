import React, { ImgHTMLAttributes, MapHTMLAttributes } from 'react';

import './Image.scss';

interface ImageProps extends ImgHTMLAttributes<HTMLImageElement> {

}

interface ImageMapProps extends MapHTMLAttributes<HTMLMapElement> {

}

export const Image: React.FC<ImageProps> = ({
  children,
  ...rest
}) => {
  return (
    <img {...rest} className={`Image ${rest.className}`} alt={(rest.alt !== undefined) ? 'alt missing, not erroring' : rest.alt}/>
  );
}

export const ImageMap: React.FC<ImageMapProps> = ({
  children,
  ...rest
}) => {
  return (
    <map {...rest} className={`Map ${rest.className}`}>{ children }</map>
  );
}