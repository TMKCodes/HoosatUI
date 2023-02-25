import React, { VideoHTMLAttributes } from 'react';

import './Video.scss';

interface VideoProps extends VideoHTMLAttributes<HTMLVideoElement>{

}

export const Video: React.FC<VideoProps> = ({
  children,
  ...rest
}) => {
  return (
    <video {...rest} className={`Video ${rest.className}`} >{ children }</video>
  );
}