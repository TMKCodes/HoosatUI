import React, { ImgHTMLAttributes } from 'react';

import './Image.scss';

interface ImageProps extends ImgHTMLAttributes<HTMLImageElement> {

}

export const Image: React.FC<ImageProps> = ({
  children,
  ...rest
}) => {
  return (
    <img {...rest} className={`Image ${rest.className}`} />
  );
}